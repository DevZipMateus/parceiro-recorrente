import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CTASection = () => {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 font-sans">
            Quer entender exatamente como funciona?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-2">
            O próximo passo é simples:
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Preencha o formulário abaixo com seus dados e entraremos em contato para explicar todos os detalhes, 
            esclarecer suas dúvidas e mostrar cases reais de representantes que estão tendo sucesso.
          </p>
        </div>

        <Card className="border-0 shadow-xl" style={{ boxShadow: 'var(--accent-shadow)' }}>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <form className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Nome completo *
                  </Label>
                  <Input 
                    id="fullName"
                    placeholder="Digite seu nome completo"
                    className="mt-1 md:mt-2 h-11 md:h-10"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="emailAddress" className="text-sm font-medium">
                    E-mail *
                  </Label>
                  <Input 
                    id="emailAddress"
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    className="mt-1 md:mt-2 h-11 md:h-10"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    WhatsApp *
                  </Label>
                  <Input 
                    id="phoneNumber"
                    placeholder="(11) 99999-9999"
                    className="mt-1 md:mt-2 h-11 md:h-10"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-medium">
                    Cidade
                  </Label>
                  <Input 
                    id="city"
                    placeholder="Sua cidade"
                    className="mt-1 md:mt-2 h-11 md:h-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="experience" className="text-sm font-medium">
                  Conte um pouco sobre sua experiência profissional
                </Label>
                <Textarea 
                  id="experience"
                  placeholder="Ex: Trabalho há 10 anos com vendas, atualmente em uma empresa de..."
                  className="mt-1 md:mt-2 min-h-[80px] md:min-h-[100px]"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 md:pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 md:h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm md:text-lg py-3 md:py-6 font-sans uppercase"
                >
                  <span className="text-lg mr-2">📞</span>
                  QUERO CONVERSAR AGORA
                  <span className="text-lg ml-2">➡️</span>
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Ao enviar o formulário você concorda em receber contato para mais informações.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 md:mt-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📞</span>
                    <span>Ligação em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📧</span>
                    <span>Material por e-mail</span>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;