import { Clock, Flame, Truck, Shield, DollarSign, Leaf } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24-Hour Service",
    description: "Our clients deserve nothing less than the highest standard of assistance, and we make every effort to ensure they continue to receive it. Events may be catered at any time of day."
  },
  {
    icon: Flame,
    title: "On-Site Cooking",
    description: "We prepare every dish ON-SITE at your event, ensuring its delectability and allowing your visitors to unwind while enjoying the freshly prepared barbecue."
  },
  {
    icon: Truck,
    title: "We Come To You!",
    description: "We guarantee a smooth experience at each occasion by assembling a proficient staff comprising an event manager, chef, and diligent stewards."
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Rest assured that our organization is completely licensed and insured, ensuring both professionalism and tranquility for your event's catering needs."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium BBQ catering doesn't have to break the bank. We offer competitive pricing packages tailored to your budget without compromising on quality."
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "We source only the freshest, locally-sourced ingredients to ensure every bite delivers exceptional flavor and quality that your guests will remember."
  }
];

const WhatsIncludedSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          WHAT'S <span className="text-primary">INCLUDED!</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-service group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
