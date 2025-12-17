import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Ready to make your event unforgettable? Get in touch today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                BBQ Catering Toronto GTA & Surrounding Areas. Whether you're planning a corporate event, 
                private party, or community gathering, we're here to help make it delicious.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+14167770735" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (416) 777-0735
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@goodtimesbbq.ca" className="text-muted-foreground hover:text-primary transition-colors">
                      info@goodtimesbbq.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Service Area</h3>
                    <p className="text-muted-foreground">
                      Serving the Greater Toronto Area & Surrounding Communities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      24/7 Event Catering Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                Request a <span className="text-primary">Quote</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      className="bg-muted border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      className="bg-muted border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-foreground">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      className="bg-muted border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="text-foreground">Number of Guests</Label>
                    <Input
                      id="guestCount"
                      type="number"
                      placeholder="Approx. guests"
                      className="bg-muted border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-foreground">Event Type</Label>
                  <Input
                    id="eventType"
                    placeholder="Corporate, Birthday, Wedding, etc."
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your event..."
                    className="bg-muted border-border text-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider py-6"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground font-display tracking-wider">
            SERVING THE GTA & SURROUNDING AREAS
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
