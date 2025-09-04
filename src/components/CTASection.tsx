import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const CTASection = () => {
  return <section className="py-8 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
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

        <Card className="border-0 shadow-xl" style={{
        boxShadow: 'var(--accent-shadow)'
      }}>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <form className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Nome *
                  </Label>
                  <Input id="fullName" placeholder="Digite seu nome" className="mt-1 md:mt-2 h-11 md:h-10" required />
                </div>
                <div>
                  <Label htmlFor="emailAddress" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input id="emailAddress" type="email" placeholder="Digite seu email" className="mt-1 md:mt-2 h-11 md:h-10" required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    Telefone *
                  </Label>
                  <Input id="phoneNumber" placeholder="(11) 99999-9999" className="mt-1 md:mt-2 h-11 md:h-10" required />
                </div>
                <div>
                  <Label htmlFor="profession" className="text-sm font-medium">
                    Profissão *
                  </Label>
                  <Input id="profession" placeholder="Sua profissão" className="mt-1 md:mt-2 h-11 md:h-10" required />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Tem experiência em vendas? *
                </Label>
                <RadioGroup defaultValue="" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="sim" />
                    <Label htmlFor="sim" className="text-sm font-normal cursor-pointer">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="nao" />
                    <Label htmlFor="nao" className="text-sm font-normal cursor-pointer">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="investment" className="text-sm font-medium">
                  Selecione a faixa de investimento *
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 md:mt-2 h-11 md:h-10">
                    <SelectValue placeholder="Escolha sua faixa de investimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100-150">De 100.000 a 150.000</SelectItem>
                    <SelectItem value="150-200">De 150.000 a 200.000</SelectItem>
                    <SelectItem value="200-300">De 200.000 a 300.000</SelectItem>
                    <SelectItem value="300+">Superior a 300.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-3 pt-2 md:pt-4">
                <Button type="submit" size="lg" className="w-full h-12 md:h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm md:text-lg py-3 md:py-6 font-sans">
                  
                  Quero conversar agora
                  
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Ao enviar o formulário você concorda em receber contato para mais informações.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 md:mt-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Ligação em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>Material por e-mail</span>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default CTASection;