import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/30 py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <Card className="border-0 shadow-xl animate-fade-in" style={{
            boxShadow: 'var(--accent-shadow)'
          }}>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground animate-scale-in animate-stagger-1">
                  Obrigado!
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-stagger-2">
                  Entraremos em contato por telefone em breve.
                </p>

                <div className="animate-fade-in animate-stagger-3">
                  <div className="relative w-full max-w-3xl mx-auto">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/DBcssW_Nae0"
                        title="Vídeo explicativo"
                        className="w-full h-full rounded-lg shadow-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="pt-4 animate-fade-in animate-stagger-4">
                  <Button 
                    onClick={() => navigate('/')}
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 h-auto font-semibold hover-glow smooth-transition hover:scale-105"
                  >
                    Voltar para o site
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;