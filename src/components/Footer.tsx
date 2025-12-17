import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      {/* Contact Section */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Good Times <span className="text-primary">BBQ</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Premium BBQ catering for corporate events, private parties, and everything in between. We grill, you chill.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:+14167770735" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  +1 (416) 777-0735
                </a>
                <a href="mailto:info@goodtimesbbq.ca" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  info@goodtimesbbq.ca
                </a>
              </div>
              <div className="mt-6">
                <p className="text-muted-foreground">
                  Serving the GTA & Surrounding Areas
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-4">Join Our Mailing List</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Stay updated with our latest menus and special offers.
              </p>
              <form className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-muted border-border text-foreground"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 px-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Good Times BBQ and Catering. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/story" className="hover:text-primary transition-colors">About</Link>
            <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
