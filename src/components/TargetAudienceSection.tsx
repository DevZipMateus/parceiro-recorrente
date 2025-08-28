import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const TargetAudienceSection = () => {
  const targetPoints = [
    "Trabalha há anos, é bom no que faz, mas sente que não tem como seguir crescendo no seu trabalho atual",
    "Tem planos de aumentar a família, mas isso gera insegurança financeira.",
    "Já pesquisou franquias mas ficou assustado com investimentos de R$ 80 mil, R$ 150 mil, R$ 300 mil ou mais…",
    "Tem medo de chegar aos 60 anos e descobrir que não é capaz de manter o mesmo padrão de vida com o teto do INSS",
    "Sabe que precisa de novas fontes de renda mas não quer arriscar todas suas economias."
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-lg" style={{ boxShadow: 'var(--card-shadow)' }}>
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Esse modelo de negócio é ideal para quem:
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-4">
              {targetPoints.map((point, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-secondary/50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Você não está passando por isso sozinho.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nós já ajudamos milhares de profissionais experientes que se encontravam nessas situações. 
                Eles conseguiram um conjunto de clientes que trazem uma receita mensal de forma constante. 
                Isso não é renda passiva e não é fácil. É preciso trabalho para conquistar novos clientes e, 
                assim, aumentar a sua receita mensal a partir dos seus clientes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TargetAudienceSection;