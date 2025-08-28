import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HeroSection = () => {
  return (
    <section className="min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-background to-secondary/30 py-8 md:py-12">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight font-sans">
              Conheça um modelo de negócio{" "}
              <span className="text-primary">melhor que franquia</span>
            </h1>
            <p className="text-base md:text-lg text-foreground leading-relaxed font-sans">
              Como profissionais experientes estão construindo patrimônio sólido com receita recorrente - 
              investindo 50x menos que franquias tradicionais e com muito mais estabilidade
            </p>
          </div>

          <Card className="shadow-lg border-0 order-1 lg:order-2" style={{ boxShadow: 'var(--card-shadow)' }}>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="bg-accent text-accent-foreground p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2 font-sans uppercase">TIRE SUAS DÚVIDAS</h3>
                <p className="text-xs sm:text-sm">Preencha o formulário e receba mais informações</p>
              </div>
              
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Digite seu nome completo"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Digite seu melhor e-mail"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input 
                    id="phone" 
                    placeholder="(11) 99999-9999"
                    className="mt-1"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 sm:h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold font-sans uppercase text-sm sm:text-base"
                >
                  QUERO SABER MAIS
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-3 sm:mt-4">
                Ao clicar no botão você concorda em receber contato
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;