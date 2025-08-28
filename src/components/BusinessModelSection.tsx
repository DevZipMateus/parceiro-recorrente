import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const BusinessModelSection = () => {
  const benefits = [
    "Você investe menos de R$ 1.000 por mês (menos que muitas franquias cobram só de taxa mensal)",
    "Seus clientes ativos pagam TODO MÊS - criando uma receita previsível que só cresce",
    "Você não precisa de ponto comercial, estoque ou funcionários",
    "A sazonalidade não influencia no faturamento da sua empresa",
    "Você pode trabalhar de casa, da praia ou de qualquer lugar",
    "Seu produto nunca quebra, estraga ou sai de moda",
    "O mercado tem milhões de clientes em potencial, já que toda pequena empresa precisa"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-lg" style={{ boxShadow: 'var(--card-shadow)' }}>
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Oferecemos um modelo de negócio onde:
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start p-4 bg-success/5 rounded-lg border border-success/20">
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    <CheckCircle2 className="w-4 h-4" />
                  </Badge>
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Parece bom demais para ser verdade?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                É exatamente isso que pensávamos também… até vermos com nossos próprios olhos 
                representantes de cidades pequenas conquistando seus primeiros 100 clientes ativos 
                já no primeiro ano de representação.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessModelSection;