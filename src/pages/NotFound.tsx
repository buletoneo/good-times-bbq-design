import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Looks like this page went up in smoke! Let us guide you back to the grill.
          </p>
          <Link to="/">
            <Button className="bg-primary text-primary-foreground hover:bg-maroon-light font-display tracking-wider">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
