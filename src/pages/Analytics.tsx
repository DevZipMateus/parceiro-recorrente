import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface AnalyticsData {
  totalVisits: number;
  totalLeads: number;
  conversionRate: number;
  sourceData: Array<{ source: string; visits: number; leads: number; conversion: number }>;
  timeSeriesData: Array<{ date: string; visits: number; leads: number }>;
}

const Analytics = () => {
  const { signOut } = useAuth();
  const [data, setData] = useState<AnalyticsData>({
    totalVisits: 0,
    totalLeads: 0,
    conversionRate: 0,
    sourceData: [],
    timeSeriesData: [],
  });
  const [period, setPeriod] = useState('7');
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const days = parseInt(period);
      const startDate = startOfDay(subDays(new Date(), days));
      const endDate = endOfDay(new Date());

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
      for (let i = 0; i < days; i++) {
        const date = format(subDays(new Date(), i), 'yyyy-MM-dd');
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
  }, [period]);

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
        <div className="flex gap-4">
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