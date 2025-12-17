import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import trustedImage from "@/assets/trusted-service.jpg";
import corporateImage from "@/assets/corporate-event.jpg";

const TrustedSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Trusted Service */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Trusted <span className="text-primary">Service</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Good Times BBQ is the go-to BBQ catering company for Fortune 500 clients and private events. 
              As a trusted BBQ caterer, we deliver high-quality, locally sourced dishes with professional, 
              reliable service. From corporate BBQ events to backyard parties, our freshly prepared meals 
              and personalized support ensure every BBQ catering experience is smooth, memorable, and delicious. 
              Whether it's a small gathering or a large outdoor celebration, Good Times BBQ brings excellence to every event.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider px-8 py-6">
                Request Quote
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img
              src={trustedImage}
              alt="BBQ catering corporate event"
              className="w-full h-[400px] object-cover rounded-lg shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground font-display text-xl md:text-2xl tracking-wider py-4 px-6 rounded">
              WE GRILL, YOU CHILL.
            </div>
          </div>
        </div>

        {/* Empower Growth */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={corporateImage}
              alt="BBQ catering chef cooking"
              className="w-full h-[400px] object-cover rounded-lg shadow-card"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Empower <span className="text-primary">Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Good Times BBQ is more than just great food — we create BBQ catering experiences that foster 
              connection and growth. As a trusted BBQ caterer for companies across Toronto, we elevate 
              corporate BBQ events by supporting business goals and providing the perfect atmosphere for networking. 
              For family BBQ gatherings, we deliver the same care and customized menus, ensuring every celebration 
              is seamless, memorable, and stress-free.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider px-8 py-6">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
