import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import businessImage from "@/assets/business-meeting.jpg";

const AboutSection = () => {
  const clientTypes = [
    "Profissionais experientes de marketing e vendas buscando uma nova fonte de receita",
    "Pessoas que já tentaram outras oportunidades sem sucesso",
    "Quem queria sair da dependência do salário mas tinha receio de 'arriscar' muito dinheiro"
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
          <div>
            <Badge variant="outline" className="mb-3 md:mb-4 text-accent border-accent text-xs sm:text-sm">
              20 ANOS DE EXPERIÊNCIA
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Há 20 anos ajudamos mais de 20.000 pequenas empresas a organizarem suas finanças através do eGestor.
            </h2>
          </div>
          <div className="relative">
            <img 
              src={businessImage} 
              alt="Reunião de negócios com profissionais discutindo estratégias de crescimento financeiro"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-6">
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
                    <span className="text-base flex-shrink-0">🔹</span>
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