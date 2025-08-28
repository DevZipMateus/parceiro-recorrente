import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow" style={{ boxShadow: 'var(--card-shadow)' }}>
              <CardHeader className="pb-3 md:pb-4 px-4 md:px-6">
                <CardTitle className="flex items-start gap-3 md:gap-4 text-base md:text-lg">
                  <span className="text-lg flex-shrink-0">❓</span>
                  <span className="leading-relaxed">{faq.question}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <p className="text-muted-foreground leading-relaxed pl-8 md:pl-10 text-sm md:text-base">
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