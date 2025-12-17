import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GrowVisionSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Grow Your <span className="text-primary">Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            At Good Times BBQ, every event is an opportunity to deliver unforgettable BBQ catering. 
            Whether it's a corporate BBQ event or a family celebration, we exceed expectations with 
            exceptional food and personalized service. Using the freshest local ingredients, we craft 
            BBQ meals that taste as amazing as they look. From intimate gatherings to large-scale BBQ 
            events, our team ensures every occasion is seamless, meaningful, and truly memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider min-w-[200px]"
              >
                Request Quote
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-display tracking-wider min-w-[200px]"
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

export default GrowVisionSection;
