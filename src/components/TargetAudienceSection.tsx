import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import familyImage from "@/assets/family-success.jpg";
const TargetAudienceSection = () => {
  const targetPoints = ["Trabalha há anos, é bom no que faz, mas sente que não tem como seguir crescendo no seu trabalho atual", "Tem planos de aumentar a família, mas isso gera insegurança financeira.", "Já pesquisou franquias mas ficou assustado com investimentos de R$ 80 mil, R$ 150 mil, R$ 300 mil ou mais…", "Tem medo de chegar aos 60 anos e descobrir que não é capaz de manter o mesmo padrão de vida com o teto do INSS", "Sabe que precisa de novas fontes de renda mas não quer arriscar todas suas economias."];
  return <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
          <div className="relative order-2 lg:order-1">
            <img src={familyImage} alt="Família próspera em casa moderna representando estabilidade financeira e qualidade de vida" className="w-full h-auto rounded-2xl shadow-xl" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
              Esse modelo de negócio é ideal para quem:
            </h2>
          </div>
        </div>
        <Card className="border-0 bg-white">
          <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-6">
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
            <ul className="space-y-3 md:space-y-4">
              {targetPoints.map((point, index) => <li key={index} className="flex gap-3 md:gap-4 items-start">
                  <span className="text-lg flex-shrink-0">✅</span>
                  <span className="text-muted-foreground leading-relaxed text-sm md:text-base">{point}</span>
                </li>)}
            </ul>
            
            <div className="bg-secondary/50 p-4 sm:p-6 rounded-lg mt-6 md:mt-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4">
                Você não está passando por isso sozinho.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Nós já ajudamos milhares de profissionais experientes que se encontravam nessas situações. 
                Eles conseguiram um conjunto de clientes que trazem uma receita mensal de forma constante. 
                Isso não é renda passiva e não é fácil. É preciso trabalho para conquistar novos clientes e, 
                assim, aumentar a sua receita mensal a partir dos seus clientes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default TargetAudienceSection;