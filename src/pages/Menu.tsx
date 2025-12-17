import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuCategories = {
  mains: [
    { name: "BBQ Chicken", description: "Slow-smoked chicken with our signature BBQ glaze", price: "Market Price" },
    { name: "Beef Brisket", description: "12-hour smoked brisket with Texas-style rub", price: "Market Price" },
    { name: "Pulled Pork", description: "Tender pulled pork with Carolina-style sauce", price: "Market Price" },
    { name: "BBQ Ribs", description: "Fall-off-the-bone ribs with house BBQ sauce", price: "Market Price" },
    { name: "Grilled Burgers", description: "Premium beef patties with all the fixings", price: "Market Price" },
    { name: "Hot Dogs", description: "All-beef franks with classic toppings", price: "Market Price" },
    { name: "Chicken Skewers", description: "Marinated chicken kebabs grilled to perfection", price: "Market Price" },
    { name: "Veggie Burgers", description: "House-made vegetarian patties", price: "Market Price" },
  ],
  sides: [
    { name: "Coleslaw", description: "Creamy homemade coleslaw" },
    { name: "Baked Beans", description: "Smoky sweet baked beans" },
    { name: "Corn on the Cob", description: "Grilled with butter and herbs" },
    { name: "Mac & Cheese", description: "Creamy three-cheese blend" },
    { name: "Potato Salad", description: "Classic creamy potato salad" },
    { name: "Garden Salad", description: "Fresh mixed greens with dressing" },
    { name: "Cornbread", description: "Sweet buttermilk cornbread" },
    { name: "Grilled Vegetables", description: "Seasonal vegetables medley" },
  ],
  packages: [
    { 
      name: "Essential Package", 
      description: "Perfect for small gatherings",
      includes: ["Choice of 2 mains", "2 sides", "Buns & condiments", "Plates & utensils"],
      guests: "Up to 50 guests"
    },
    { 
      name: "Premium Package", 
      description: "Our most popular option",
      includes: ["Choice of 3 mains", "3 sides", "Buns & condiments", "Full service staff", "Setup & cleanup"],
      guests: "Up to 200 guests"
    },
    { 
      name: "Corporate Package", 
      description: "Designed for large events",
      includes: ["Choice of 4+ mains", "4+ sides", "Full beverage service", "Event manager", "Custom branding options"],
      guests: "200+ guests"
    },
  ]
};

const Menu = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Explore our delicious BBQ catering options. All dishes prepared fresh on-site at your event.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs defaultValue="mains" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-muted">
              <TabsTrigger value="mains" className="font-display tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                MAINS
              </TabsTrigger>
              <TabsTrigger value="sides" className="font-display tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                SIDES
              </TabsTrigger>
              <TabsTrigger value="packages" className="font-display tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                PACKAGES
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mains">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuCategories.mains.map((item) => (
                  <Card key={item.name} className="bg-card border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-display text-lg text-foreground">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                      <p className="text-primary font-semibold">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sides">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuCategories.sides.map((item) => (
                  <Card key={item.name} className="bg-card border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-display text-lg text-foreground">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="packages">
              <div className="grid md:grid-cols-3 gap-8">
                {menuCategories.packages.map((pkg) => (
                  <Card key={pkg.name} className="bg-card border-border hover:border-primary transition-colors">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="font-display text-2xl text-primary">{pkg.name}</CardTitle>
                      <p className="text-muted-foreground">{pkg.description}</p>
                      <p className="text-sm text-foreground font-semibold mt-2">{pkg.guests}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="block mt-6">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider">
                          Get Quote
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Custom Options Note */}
          <div className="mt-16 p-8 bg-secondary rounded-lg text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              Need Something <span className="text-primary">Special?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer customizable BBQ catering menus, including Halal and Kosher options. 
              Contact us to discuss your specific requirements and create a menu tailored to your event.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
