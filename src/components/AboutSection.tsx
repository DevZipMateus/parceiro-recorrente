import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const clientTypes = [
    "Profissionais experientes de marketing e vendas buscando uma nova fonte de receita",
    "Pessoas que já tentaram outras oportunidades sem sucesso",
    "Quem queria sair da dependência do salário mas tinha receio de 'arriscar' muito dinheiro"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-lg" style={{ boxShadow: 'var(--card-shadow)' }}>
          <CardHeader className="text-center pb-8">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              20 ANOS DE EXPERIÊNCIA
            </Badge>
            <CardTitle className="text-3xl font-bold text-foreground mb-6">
              Há 20 anos ajudamos mais de 20.000 pequenas empresas a organizarem suas finanças através do eGestor.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hoje temos mais de 1.000 representantes espalhados por todo o Brasil - muitos que começaram 
                exatamente na sua situação:
              </p>
              
              <ul className="space-y-3 mb-8">
                {clientTypes.map((type, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                O resultado?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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