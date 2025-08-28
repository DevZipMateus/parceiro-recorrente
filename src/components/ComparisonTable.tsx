import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const ComparisonTable = () => {
  const comparisons = [{
    aspect: "Investimento inicial",
    franchise: "R$ 80.000 a R$ 300.000",
    egestor: "Muito menor",
    advantage: "egestor"
  }, {
    aspect: "Ponto físico",
    franchise: "Obrigatório",
    egestor: "100% digital",
    advantage: "egestor"
  }, {
    aspect: "Retorno",
    franchise: "2 a 3 anos",
    egestor: "Poucos meses",
    advantage: "egestor"
  }, {
    aspect: "Custos fixos",
    franchise: "Aluguel, funcionários, estoque",
    egestor: "Verificar os custos iniciais",
    advantage: "egestor"
  }, {
    aspect: "Flexibilidade",
    franchise: "Amarrado a contrato e regras",
    egestor: "Liberdade para crescer sua carteira",
    advantage: "egestor"
  }, {
    aspect: "Ganhos",
    franchise: "Dependem de fluxo do ponto",
    egestor: "Receita recorrente e previsível",
    advantage: "egestor"
  }, {
    aspect: "Suporte",
    franchise: "Treinamento + regras rígidas",
    egestor: "Treinamento + acompanhamento contínuo",
    advantage: "egestor"
  }, {
    aspect: "Risco",
    franchise: "Médio/alto",
    egestor: "Baixo",
    advantage: "egestor"
  }];
  return <section className="py-8 md:py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <Card className="border-0 shadow-lg overflow-hidden" style={{
        boxShadow: 'var(--card-shadow)'
      }}>
          <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-6 bg-transparent">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Comparação: Franquia vs. eGestor
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Mobile Card Layout */}
            <div className="block md:hidden">
              {comparisons.map((item, index) => <div key={index} className="border-b border-border last:border-b-0 p-4">
                  <h4 className="font-bold text-foreground mb-3">{item.aspect}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-base flex-shrink-0">❌</span>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Franquia Tradicional</p>
                        <p className="text-sm text-muted-foreground">{item.franchise}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-base flex-shrink-0">✅</span>
                      <div>
                        <p className="text-xs text-success font-medium">Revenda eGestor</p>
                        <p className="text-sm text-success font-medium">{item.egestor}</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
            
            {/* Desktop Table Layout */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 md:p-6 font-bold text-foreground bg-muted/30 text-sm md:text-base">Aspecto</th>
                    <th className="text-center p-3 md:p-6 font-bold text-foreground bg-muted/10 text-sm md:text-base">Franquia Tradicional</th>
                    <th className="text-center p-3 md:p-6 font-bold text-success bg-success/5 text-sm md:text-base">Revenda eGestor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => <tr key={index} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 md:p-6 font-medium text-foreground bg-muted/10 text-sm md:text-base">
                        {item.aspect}
                      </td>
                      <td className="p-3 md:p-6 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                          <span className="text-base flex-shrink-0">❌</span>
                          <span>{item.franchise}</span>
                        </div>
                      </td>
                      <td className="p-3 md:p-6 text-center bg-success/5">
                        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                          <span className="text-base flex-shrink-0">✅</span>
                          <span className="text-success font-medium">{item.egestor}</span>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default ComparisonTable;