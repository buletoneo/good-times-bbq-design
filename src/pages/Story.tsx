import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import trustedImage from "@/assets/trusted-service.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import bannerImage from "@/assets/banner-story.jpg";

const Story = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Discover the passion behind Good Times BBQ and Catering
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                From Passion to <span className="text-primary">Profession</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Good Times BBQ was born from a deep love for the art of barbecue and a desire to bring 
                people together through exceptional food. What started as backyard cookouts with family 
                and friends has grown into a premier BBQ catering service trusted by Fortune 500 companies 
                and private clients alike.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our founder's journey began with a simple belief: that food has the power to create 
                lasting memories and foster genuine connections. Every event we cater is an opportunity 
                to deliver not just a meal, but an experience that brings people together.
              </p>
            </div>
            <div>
              <img
                src={trustedImage}
                alt="Good Times BBQ catering event"
                className="w-full h-[400px] object-cover rounded-lg shadow-card"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={corporateImage}
                alt="Good Times BBQ chef cooking"
                className="w-full h-[400px] object-cover rounded-lg shadow-card"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Commitment</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Good Times BBQ, we're committed to using only the freshest, locally-sourced ingredients. 
                Every dish is prepared on-site, ensuring your guests experience the true essence of barbecue — 
                smoky, flavorful, and always fresh off the grill.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our team of experienced chefs, event managers, and service staff work together seamlessly 
                to deliver an unforgettable catering experience. From the first consultation to the last 
                plate served, we handle every detail with care and professionalism.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider px-8 py-6">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on the quality of our ingredients or service. Every dish reflects our commitment to excellence."
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We listen, adapt, and deliver customized solutions for every event."
              },
              {
                title: "Community",
                description: "We believe in giving back to the community that has supported us throughout our journey."
              }
            ].map((value) => (
              <div key={value.title} className="card-service text-center">
                <h3 className="font-display text-xl font-semibold mb-4 text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;
