import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    salesExperience: "",
    investmentRange: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);

    try {
      // Validação básica
      if (!formData.name || !formData.email || !formData.phone || !formData.profession || !formData.salesExperience || !formData.investmentRange) {
        toast({
          title: "Erro",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
        setIsLoading(false);
        e.preventDefault();
        return;
      }

      // Debug: Log dos valores antes do envio
      console.log("Dados do formulário:", formData);

      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. Entraremos em contato em breve!",
      });

      // Redirecionar para página de agradecimento após um delay
      setTimeout(() => {
        navigate('/obrigado');
      }, 2000);

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
      e.preventDefault();
    } finally {
      setIsLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} data-form-type="embedded" className="space-y-4 md:space-y-6">
              {/* Campos hidden para identificação do RD Station */}
              <input type="hidden" name="token" value="004614e99c43a7bca7b23af79bdcae34" />
              <input type="hidden" name="identificador" value="form-franquia" />
              <input type="hidden" name="conversion_identifier" value="form-franquia" />
              
              {/* Campos UTM para origem no RD Station */}
              <input type="hidden" name="utm_source" value="lp-franquia" />
              <input type="hidden" name="utm_medium" value="landing-page" />
              <input type="hidden" name="utm_campaign" value="franquia-zipline" />
              
              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Nome *
                  </Label>
                  <Input 
                    id="fullName" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Digite seu nome" 
                    className="mt-1 md:mt-2 h-11 md:h-10 focus-glow fast-transition" 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="emailAddress" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input 
                    id="emailAddress" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Digite seu email" 
                    className="mt-1 md:mt-2 h-11 md:h-10 focus-glow fast-transition" 
                    required 
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    Telefone *
                  </Label>
                  <Input 
                    id="phoneNumber" 
                    name="mobile_phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999" 
                    className="mt-1 md:mt-2 h-11 md:h-10 focus-glow fast-transition" 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="profession" className="text-sm font-medium">
                    Profissão *
                  </Label>
                  <Input 
                    id="profession" 
                    name="job_title"
                    value={formData.profession}
                    onChange={(e) => handleInputChange("profession", e.target.value)}
                    placeholder="Sua profissão" 
                    className="mt-1 md:mt-2 h-11 md:h-10 focus-glow fast-transition" 
                    required 
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Tem experiência em vendas? *
                </Label>
                <RadioGroup 
                  value={formData.salesExperience} 
                  onValueChange={(value) => handleInputChange("salesExperience", value)}
                  className="flex gap-6"
                  name="cf_experiencia_em_vendas"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="sim" />
                    <Label htmlFor="sim" className="text-sm font-normal cursor-pointer">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="nao" />
                    <Label htmlFor="nao" className="text-sm font-normal cursor-pointer">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="investment" className="text-sm font-medium">
                  Selecione a faixa de investimento *
                </Label>
                <Select 
                  value={formData.investmentRange} 
                  onValueChange={(value) => handleInputChange("investmentRange", value)}
                  name="cf_faixa_de_investimento"
                >
                  <SelectTrigger className="mt-1 md:mt-2 h-11 md:h-10">
                    <SelectValue placeholder="Escolha sua faixa de investimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="De 100.000 a 150.000">De 100.000 a 150.000</SelectItem>
                    <SelectItem value="De 150.000 a 200.000">De 150.000 a 200.000</SelectItem>
                    <SelectItem value="De 200.000 a 300.000">De 200.000 a 300.000</SelectItem>
                    <SelectItem value="Superior a 300.000">Superior a 300.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-3 pt-2 md:pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="w-full h-12 md:h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm md:text-lg py-3 md:py-6 font-sans hover-glow smooth-transition hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isLoading ? "Enviando..." : "Quero conversar agora"}
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