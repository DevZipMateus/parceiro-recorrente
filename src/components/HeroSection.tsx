import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business-professional.jpg";
import { useEffect } from "react";
import { trackVisit } from "@/utils/analytics";
const HeroSection = () => {
  useEffect(() => {
    // Track visit when component mounts
    trackVisit();
  }, []);

  return <section className="min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-background to-secondary/30 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight font-sans animate-fade-in">
              Conheça um modelo de negócio{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-[FF6B35] text-[#ff6b35] animate-fade-in animate-stagger-1">
                melhor que franquia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans max-w-xl animate-slide-up animate-stagger-2">
              Como profissionais experientes estão construindo patrimônio sólido com receita recorrente - 
              investindo 50x menos que franquias tradicionais e com muito mais estabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up animate-stagger-3">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold font-sans text-base px-8 py-4 h-auto hover-glow smooth-transition hover:scale-105"
                onClick={() => {
                  const targetSection = document.getElementById('target-audience');
                  targetSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Descubra como funciona
              </Button>
              
            </div>
          </div>

          <div className="relative animate-scale-in animate-stagger-2">
            <img src={heroImage} alt="Contraste entre investimento em franquia tradicional versus modelo de negócio mais acessível e lucrativo" className="w-full h-auto rounded-2xl smooth-transition hover:scale-105" />
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;