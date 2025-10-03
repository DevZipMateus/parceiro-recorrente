import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ReferenceLine } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { format, subDays, startOfDay, endOfDay, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Annotation {
  id: string;
  date: string;
  note: string;
  created_at: string;
  user_id: string;
}

interface AnalyticsData {
  totalVisits: number;
  totalLeads: number;
  conversionRate: number;
  sourceData: Array<{ source: string; visits: number; leads: number; conversion: number }>;
  timeSeriesData: Array<{ date: string; visits: number; leads: number; conversion: number }>;
}

const Analytics = () => {
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const [data, setData] = useState<AnalyticsData>({
    totalVisits: 0,
    totalLeads: 0,
    conversionRate: 0,
    sourceData: [],
    timeSeriesData: [],
  });
  const [period, setPeriod] = useState('7');
  const [dateFrom, setDateFrom] = useState<Date | undefined>(subDays(new Date(), 7));
  const [dateTo, setDateTo] = useState<Date | undefined>(new Date());
  const [filterType, setFilterType] = useState<'preset' | 'custom'>('preset');
  const [loading, setLoading] = useState(true);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [newAnnotation, setNewAnnotation] = useState({ date: new Date(), note: '' });
  const [isAddingAnnotation, setIsAddingAnnotation] = useState(false);

  const fetchAnnotations = async () => {
    try {
      const { data: annotationsData, error } = await supabase
        .from('chart_annotations')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setAnnotations(annotationsData || []);
    } catch (error) {
      console.error('Error fetching annotations:', error);
    }
  };

  const addAnnotation = async () => {
    if (!newAnnotation.note.trim() || !user) return;

    try {
      const { error } = await supabase
        .from('chart_annotations')
        .insert({
          date: format(newAnnotation.date, 'yyyy-MM-dd'),
          note: newAnnotation.note,
          user_id: user.id,
        });

      if (error) throw error;

      toast({
        title: 'Anotação adicionada',
        description: 'A anotação foi adicionada com sucesso.',
      });

      setNewAnnotation({ date: new Date(), note: '' });
      setIsAddingAnnotation(false);
      fetchAnnotations();
    } catch (error) {
      console.error('Error adding annotation:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível adicionar a anotação.',
        variant: 'destructive',
      });
    }
  };

  const deleteAnnotation = async (id: string) => {
    try {
      const { error } = await supabase
        .from('chart_annotations')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Anotação removida',
        description: 'A anotação foi removida com sucesso.',
      });

      fetchAnnotations();
    } catch (error) {
      console.error('Error deleting annotation:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível remover a anotação.',
        variant: 'destructive',
      });
    }
  };

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      let startDate: Date;
      let endDate: Date;
      
      if (filterType === 'preset') {
        const days = parseInt(period);
        startDate = startOfDay(subDays(new Date(), days));
        endDate = endOfDay(new Date());
      } else {
        startDate = dateFrom ? startOfDay(dateFrom) : startOfDay(subDays(new Date(), 7));
        endDate = dateTo ? endOfDay(dateTo) : endOfDay(new Date());
      }

      // Fetch visits
      const { data: visits, error: visitsError } = await supabase
        .from('visits')
        .select('*')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString());

      if (visitsError) throw visitsError;

      // Fetch leads
      const { data: leads, error: leadsError } = await supabase
        .from('leads')
        .select('*')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString());

      if (leadsError) throw leadsError;

      // Calculate metrics
      const totalVisits = visits?.length || 0;
      const totalLeads = leads?.length || 0;
      const conversionRate = totalVisits > 0 ? (totalLeads / totalVisits) * 100 : 0;

      // Group by source
      const sourceMap = new Map();
      
      visits?.forEach(visit => {
        const source = visit.utm_source || 'Direct';
        const current = sourceMap.get(source) || { source, visits: 0, leads: 0 };
        current.visits++;
        sourceMap.set(source, current);
      });

      leads?.forEach(lead => {
        const source = lead.utm_source || 'Direct';
        const current = sourceMap.get(source) || { source, visits: 0, leads: 0 };
        current.leads++;
        sourceMap.set(source, current);
      });

      const sourceData = Array.from(sourceMap.values()).map(item => ({
        ...item,
        conversion: item.visits > 0 ? (item.leads / item.visits) * 100 : 0,
      })).sort((a, b) => b.leads - a.leads);

      // Time series data
      const timeMap = new Map();
      const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      for (let i = 0; i <= daysDiff; i++) {
        const date = format(subDays(endDate, i), 'yyyy-MM-dd');
        timeMap.set(date, { date, visits: 0, leads: 0 });
      }

      visits?.forEach(visit => {
        const date = format(new Date(visit.created_at), 'yyyy-MM-dd');
        const current = timeMap.get(date);
        if (current) current.visits++;
      });

      leads?.forEach(lead => {
        const date = format(new Date(lead.created_at), 'yyyy-MM-dd');
        const current = timeMap.get(date);
        if (current) current.leads++;
      });

      const timeSeriesData = Array.from(timeMap.values())
        .sort((a, b) => a.date.localeCompare(b.date))
        .map(item => ({
          ...item,
          date: format(new Date(item.date), 'dd/MM', { locale: ptBR }),
          conversion: item.visits > 0 ? (item.leads / item.visits) * 100 : 0,
        }));

      setData({
        totalVisits,
        totalLeads,
        conversionRate,
        sourceData,
        timeSeriesData,
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAnalytics();
    fetchAnnotations();
  }, [period, dateFrom, dateTo, filterType]);

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', '#8884d8', '#82ca9d', '#ffc658'];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-titles">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Análise de visitas e conversões</p>
          </div>
          <Button onClick={signOut} variant="outline">
            Sair
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <Select value={filterType} onValueChange={(value: 'preset' | 'custom') => setFilterType(value)}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preset">Períodos Pré-definidos</SelectItem>
              <SelectItem value="custom">Período Personalizado</SelectItem>
            </SelectContent>
          </Select>

          {filterType === 'preset' ? (
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <div className="flex gap-2 items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !dateFrom && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? format(dateFrom, "dd/MM/yyyy") : "Data inicial"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <span className="text-muted-foreground">até</span>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !dateTo && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "dd/MM/yyyy") : "Data final"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Visitas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalVisits}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalLeads}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.conversionRate.toFixed(1)}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart - Leads by Source */}
          <Card>
            <CardHeader>
              <CardTitle>Leads por Fonte</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data.sourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ source, leads }) => `${source}: ${leads}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="leads"
                  >
                    {data.sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bar Chart - Visits by Source */}
          <Card>
            <CardHeader>
              <CardTitle>Visitas por Fonte</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.sourceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="source" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visits" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Time Series Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Visitas e Leads ao Longo do Tempo</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="hsl(var(--primary))" name="Visitas" />
                <Line type="monotone" dataKey="leads" stroke="hsl(var(--secondary))" name="Leads" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Conversion Rate Chart with Annotations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Taxa de Conversão ao Longo do Tempo</CardTitle>
              <CardDescription>Percentual de leads em relação às visitas por dia</CardDescription>
            </div>
            <Dialog open={isAddingAnnotation} onOpenChange={setIsAddingAnnotation}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Adicionar Anotação
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nova Anotação</DialogTitle>
                  <DialogDescription>
                    Adicione uma anotação para marcar alterações importantes na página
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !newAnnotation.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(newAnnotation.date, "dd/MM/yyyy")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={newAnnotation.date}
                          onSelect={(date) => date && setNewAnnotation({ ...newAnnotation, date })}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Descrição da Alteração</Label>
                    <Input
                      placeholder="Ex: Alterado cor do botão CTA"
                      value={newAnnotation.note}
                      onChange={(e) => setNewAnnotation({ ...newAnnotation, note: e.target.value })}
                    />
                  </div>
                  <Button onClick={addAnnotation} className="w-full">
                    Salvar Anotação
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis unit="%" />
                <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
                <Line 
                  type="monotone" 
                  dataKey="conversion" 
                  stroke="hsl(var(--accent))" 
                  name="Taxa de Conversão" 
                  strokeWidth={2}
                />
                {annotations.map((annotation) => {
                  const annotationDate = format(parseISO(annotation.date), 'dd/MM', { locale: ptBR });
                  return (
                    <ReferenceLine
                      key={annotation.id}
                      x={annotationDate}
                      stroke="hsl(var(--primary))"
                      strokeDasharray="3 3"
                      label={{
                        value: annotation.note,
                        position: 'top',
                        fill: 'hsl(var(--primary))',
                        fontSize: 12,
                      }}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
            
            {/* Annotations List */}
            {annotations.length > 0 && (
              <div className="mt-6 space-y-2">
                <h4 className="text-sm font-medium">Anotações</h4>
                <div className="space-y-2">
                  {annotations.map((annotation) => (
                    <div
                      key={annotation.id}
                      className="flex items-start justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-primary" />
                          <span className="text-sm font-medium">
                            {format(parseISO(annotation.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 ml-5">
                          {annotation.note}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteAnnotation(annotation.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sources Table */}
        <Card>
          <CardHeader>
            <CardTitle>Top Fontes de Tráfego</CardTitle>
            <CardDescription>Performance detalhada por fonte</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fonte</TableHead>
                  <TableHead>Visitas</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>Conversão</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.sourceData.map((source) => (
                  <TableRow key={source.source}>
                    <TableCell className="font-medium">{source.source}</TableCell>
                    <TableCell>{source.visits}</TableCell>
                    <TableCell>{source.leads}</TableCell>
                    <TableCell>{source.conversion.toFixed(1)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;