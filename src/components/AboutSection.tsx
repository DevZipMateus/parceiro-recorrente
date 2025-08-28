import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const clientTypes = [
    "Profissionais experientes de marketing e vendas buscando uma nova fonte de receita",
    "Pessoas que já tentaram outras oportunidades sem sucesso",
    "Quem queria sair da dependência do salário mas tinha receio de 'arriscar' muito dinheiro"
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <Card className="border-0 shadow-lg" style={{ boxShadow: 'var(--card-shadow)' }}>
          <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-6">
            <Badge variant="outline" className="mb-3 md:mb-4 text-accent border-accent text-xs sm:text-sm">
              20 ANOS DE EXPERIÊNCIA
            </Badge>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Há 20 anos ajudamos mais de 20.000 pequenas empresas a organizarem suas finanças através do eGestor.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 md:space-y-8 px-4 md:px-6">
            <div>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Hoje temos mais de 1.000 representantes espalhados por todo o Brasil - muitos que começaram 
                exatamente na sua situação:
              </p>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {clientTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4">
                O resultado?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Muitos conseguiram substituir completamente a renda do emprego em 18-24 meses. 
                Outros mantiveram o emprego e criaram uma segunda fonte de renda sólida para a família.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;