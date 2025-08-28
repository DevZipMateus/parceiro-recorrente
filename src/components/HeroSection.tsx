import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HeroSection = () => {
  return (
    <section className="min-h-[600px] bg-gradient-to-br from-background to-secondary/30 py-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Conheça um modelo de negócio{" "}
              <span className="text-primary">melhor que franquia</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Como profissionais experientes estão construindo patrimônio sólido com receita recorrente - 
              investindo 50x menos que franquias tradicionais e com muito mais estabilidade
            </p>
          </div>

          <Card className="shadow-lg border-0" style={{ boxShadow: 'var(--card-shadow)' }}>
            <CardContent className="p-8">
              <div className="bg-accent text-accent-foreground p-6 rounded-lg mb-6 text-center">
                <h3 className="text-xl font-bold mb-2">TIRE SUAS DÚVIDAS</h3>
                <p className="text-sm">Preencha o formulário e receba mais informações</p>
              </div>
              
              <form className="space-y-4">
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
                  className="w-full bg-success hover:bg-success/90 text-success-foreground font-semibold"
                >
                  QUERO SABER MAIS
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
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