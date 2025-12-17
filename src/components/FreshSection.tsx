import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FreshSection = () => {
  return (
    <section className="section-padding bg-gradient-maroon relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
            Always Cooked <span className="text-accent">FRESH.</span>
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 leading-relaxed">
            At Good Times BBQ, we deliver premium BBQ catering with dishes crafted from scratch 
            using the freshest ingredients. Prepared on-site with care, our BBQ meals — from crisp 
            salads to savoury entrées — are always served hot and fresh. We offer customizable BBQ 
            catering menus, including Halal and Kosher options, and our team ensures every event is 
            seamless, enjoyable, and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-background text-foreground hover:bg-foreground hover:text-background font-display tracking-wider min-w-[200px]"
              >
                Request Quote
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-display tracking-wider min-w-[200px]"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshSection;
