import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-background to-secondary/30 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight font-sans">
              Conheça um modelo de negócio{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                melhor que franquia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans max-w-xl">
              Como profissionais experientes estão construindo patrimônio sólido com receita recorrente - 
              investindo 50x menos que franquias tradicionais e com muito mais estabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-sans uppercase text-base px-8 py-4 h-auto"
              >
                DESCUBRA COMO FUNCIONA
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold font-sans uppercase text-base px-8 py-4 h-auto"
              >
                VEJA OS RESULTADOS
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Profissional de sucesso em escritório moderno demonstrando estabilidade financeira e qualidade de vida"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm text-foreground">Construindo patrimônio sólido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;