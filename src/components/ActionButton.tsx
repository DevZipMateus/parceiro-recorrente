import { Button } from "@/components/ui/button";

const ActionButton = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('formulario');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center mt-8 md:mt-12">
      <Button 
        onClick={scrollToForm}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 hover-glow smooth-transition hover:scale-[1.02]"
      >
        Quero saber mais
      </Button>
    </div>
  );
};

export default ActionButton;