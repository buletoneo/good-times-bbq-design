import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bbq.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-lg md:text-xl tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
          GOOD TIMES
        </h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
          BBQ CATERING <br className="hidden md:block" />
          <span className="text-primary">TORONTO</span>
        </h1>
        <p className="font-display text-xl md:text-2xl tracking-[0.2em] text-muted-foreground mb-10 animate-fade-in-up animation-delay-400">
          WE GRILL, YOU CHILL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="btn-hero bg-primary text-primary-foreground hover:bg-maroon-light min-w-[200px]"
            >
              CONTACT US
            </Button>
          </Link>
          <Link to="/menu">
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-hero border-2 border-foreground text-foreground hover:bg-foreground hover:text-background min-w-[200px]"
            >
              MENU
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
