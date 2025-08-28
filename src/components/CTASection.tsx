import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Quer entender exatamente como funciona?
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            O próximo passo é simples:
          </p>
          <p className="text-muted-foreground">
            Preencha o formulário abaixo com seus dados e entraremos em contato para explicar todos os detalhes, 
            esclarecer suas dúvidas e mostrar cases reais de representantes que estão tendo sucesso.
          </p>
        </div>

        <Card className="border-0 shadow-xl" style={{ boxShadow: 'var(--accent-shadow)' }}>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Nome completo *
                  </Label>
                  <Input 
                    id="fullName"
                    placeholder="Digite seu nome completo"
                    className="mt-2"
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
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    WhatsApp *
                  </Label>
                  <Input 
                    id="phoneNumber"
                    placeholder="(11) 99999-9999"
                    className="mt-2"
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
                    className="mt-2"
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
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1 bg-success hover:bg-success/90 text-success-foreground font-semibold text-lg py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  QUERO CONVERSAR AGORA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Ao enviar o formulário você concorda em receber contato para mais informações.
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Ligação em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
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