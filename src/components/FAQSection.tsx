import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Mas eu não entendo nada de tecnologia...",
      answer: `Perfeito. Nossos representantes de maior sucesso vieram de áreas como vendas, administração, 
      até mesmo comércio físico. O que importa é saber conversar com empresários. Ter contato frequente com 
      donos de empresas e gestores facilita muito!`
    },
    {
      question: "E se eu não conseguir clientes?",
      answer: `Com menos de R$ 1.000 mensais de investimento, o risco é mínimo comparado a qualquer franquia. 
      Além disso, nossa equipe faz as primeiras vendas junto com você.`
    },
    {
      question: "Minha cidade é pequena...",
      answer: `Você pode atender clientes de qualquer lugar do Brasil. Muitos dos nossos representantes 
      atendem empresas de outras cidades e estados.`
    },
    {
      question: "Não quero largar tudo de uma vez...",
      answer: `Perfeito. Muitos começam dedicando algumas horas por semana para testar e conhecer o mercado. 
      Quando veem os resultados e ganham confiança, aí decidem o nível de dedicação ideal.`
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ boxShadow: 'var(--card-shadow)' }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-lg">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;