import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import familyImage from "@/assets/family-success.jpg";
const TargetAudienceSection = () => {
  const targetPoints = ["Trabalha há anos, é bom no que faz, mas sente que não tem como seguir crescendo no seu trabalho atual", "Tem planos de aumentar a família, mas isso gera insegurança financeira.", "Já pesquisou franquias mas ficou assustado com investimentos de R$ 80 mil, R$ 150 mil, R$ 300 mil ou mais…", "Tem medo de chegar aos 60 anos e descobrir que não é capaz de manter o mesmo padrão de vida com o teto do INSS", "Sabe que precisa de novas fontes de renda mas não quer arriscar todas suas economias."];
  return <section className="py-8 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
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
        
      </div>
    </section>;
};
export default TargetAudienceSection;