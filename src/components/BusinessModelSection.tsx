import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const BusinessModelSection = () => {
  const benefits = ["Você investe menos de R$ 1.000 por mês (menos que muitas franquias cobram só de taxa mensal)", "Seus clientes ativos pagam TODO MÊS - criando uma receita previsível que só cresce", "Você não precisa de ponto comercial, estoque ou funcionários", "A sazonalidade não influencia no faturamento da sua empresa", "Você pode trabalhar de casa, da praia ou de qualquer lugar", "Seu produto nunca quebra, estraga ou sai de moda", "O mercado tem milhões de clientes em potencial, já que toda pequena empresa precisa"];
  return <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <Card className="border-0 shadow-lg" style={{
        boxShadow: 'var(--card-shadow)'
      }}>
          <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-6">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              Oferecemos um modelo de negócio onde:
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
            <div className="grid gap-3 md:gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex gap-3 md:gap-4 items-start p-3 md:p-4 rounded-lg">
                  <span className="text-lg flex-shrink-0">✅</span>
                  <span className="text-foreground leading-relaxed text-sm md:text-base">{benefit}</span>
                </div>)}
            </div>
            
            <div className="border border-0 p-4 sm:p-6 rounded-lg mt-6 md:mt-8 bg-[F6F1F1] bg-[#f6f1f1]">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4">
                Parece bom demais para ser verdade?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                É exatamente isso que pensávamos também… até vermos com nossos próprios olhos 
                representantes de cidades pequenas conquistando seus primeiros 100 clientes ativos 
                já no primeiro ano de representação.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default BusinessModelSection;