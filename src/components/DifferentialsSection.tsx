import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import workspaceImage from "@/assets/workspace-analytics.jpg";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: "📈",
      title: "RECEITA RECORRENTE REAL",
      content: `Cada empresa que você conquistar vai pagar mensalmente. Assim que você alcançar 50 clientes 
      pagando R$ 279,90/mês terá R$ 13.995,00 mensais recorrentes. No mês seguinte você já começa com esse valor garantido. 
      Mas o melhor desse modelo de negócio são as margens… Sem precisar de ponto comercial, funcionários e insumos você paga 
      apenas o imposto sobre a receita e o valor por licença contratada para revender, deixando uma margem de lucro acima de 
      50% da operação que vai diretamente para seu bolso e para o patrimônio de sua família.`
    },
    {
      icon: "🎧",
      title: "SUPORTE TOTAL",
      content: `Nós fazemos as primeiras vendas junto com você. Oferecemos suporte técnico para todos os seus clientes. 
      Você foca apenas em vender e manter o relacionamento com seu cliente.`
    },
    {
      icon: "👥",
      title: "MERCADO GIGANTESCO",
      content: `Existem milhões de pequenas empresas no Brasil que ainda controlam tudo na planilha ou usam sistemas ultrapassados.`
    },
    {
      icon: "🎯",
      title: "INVESTIMENTO REALISTA",
      content: `Enquanto franquias pedem R$ 80-200 mil iniciais, você investe menos de R$ 1.000 mensais. 
      É o investimento mais seguro possível, com escalabilidade e lucro em potencial muito maior que a média do mercado.`
    }
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 px-2">
              Aqui está o que torna esse modelo diferente de tudo que você já viu:
            </h2>
          </div>
          <div className="relative">
            <img 
              src={workspaceImage} 
              alt="Workspace moderno com gráficos de crescimento e análises financeiras representando eficiência empresarial"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {differentials.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ boxShadow: 'var(--card-shadow)' }}>
              <CardHeader className="pb-3 md:pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 md:mb-4">
                  <div className="p-2 sm:p-3 bg-secondary rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <Badge variant="outline" className="text-accent border-accent font-bold text-xs sm:text-sm">
                    {item.title}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 md:mt-12 border-0 shadow-lg" style={{ boxShadow: 'var(--card-shadow)' }}>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4 md:mb-6">
              <Badge variant="outline" className="text-primary border-primary mb-3 md:mb-4 text-xs sm:text-sm">
                PESQUISA DE MERCADO
              </Badge>
            </div>
            <blockquote className="text-base sm:text-lg italic text-center text-muted-foreground border-l-4 border-primary pl-4 sm:pl-6">
              "O mercado brasileiro de pequenas empresas representa uma oportunidade única para fornecedores de ERP, 
              com mais de 13 milhões de empresas ainda dependendo de controles manuais e 11,9 milhões sem qualquer 
              sistema de gestão."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DifferentialsSection;