import { Building2, GraduationCap, Music, Users, Cake, TreePine } from "lucide-react";

const services = [
  { icon: Building2, name: "CORPORATE EVENTS" },
  { icon: GraduationCap, name: "SCHOOL FAIRS" },
  { icon: Music, name: "MUSIC FESTIVALS" },
  { icon: Users, name: "EMPLOYEE APPRECIATION" },
  { icon: Cake, name: "BIRTHDAY PARTIES" },
  { icon: TreePine, name: "PICNICS" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          BBQ CATERING <span className="text-primary">SERVICES</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12 text-lg">
          Our BBQ catering services are perfect for any event, from small, intimate gatherings to large corporate events. 
          Serving events up to 25,000 guests! We are dedicated to providing exceptional service and ensuring that your 
          guests leave your event feeling satisfied and impressed. Contact us today to learn more about how we can make 
          your next event a memorable one with our delicious on-site BBQ catering, where we come, grill & serve at your location!
        </p>
        <p className="text-primary font-display text-lg text-center mb-12 tracking-wide">
          Serving the GTA & Surrounding Areas!
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="card-service group cursor-pointer text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xs md:text-sm tracking-wider text-foreground">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
