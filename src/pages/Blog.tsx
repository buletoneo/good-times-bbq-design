import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Tips for Planning Your Corporate BBQ Event",
    excerpt: "Planning a corporate BBQ event? Here are our top tips to ensure your event is a success, from choosing the right menu to managing logistics.",
    date: "December 15, 2024",
    category: "Event Planning",
    slug: "corporate-bbq-tips"
  },
  {
    id: 2,
    title: "The Art of Low and Slow: Perfecting BBQ Brisket",
    excerpt: "Discover the secrets behind our famous 12-hour smoked brisket and why patience is the key ingredient to perfect BBQ.",
    date: "December 10, 2024",
    category: "BBQ Techniques",
    slug: "perfect-bbq-brisket"
  },
  {
    id: 3,
    title: "Summer BBQ Party Ideas Your Guests Will Love",
    excerpt: "Make your summer gathering unforgettable with these creative BBQ party ideas, from themed menus to outdoor entertainment suggestions.",
    date: "December 5, 2024",
    category: "Party Ideas",
    slug: "summer-bbq-party-ideas"
  },
  {
    id: 4,
    title: "Why On-Site BBQ Catering Makes All the Difference",
    excerpt: "Learn why having your BBQ prepared fresh on-site elevates your event experience and leaves a lasting impression on your guests.",
    date: "November 28, 2024",
    category: "Catering",
    slug: "onsite-bbq-catering"
  },
  {
    id: 5,
    title: "Choosing the Right BBQ Package for Your Event Size",
    excerpt: "Not sure which catering package to choose? We break down our options to help you find the perfect fit for your gathering.",
    date: "November 20, 2024",
    category: "Catering",
    slug: "bbq-package-guide"
  },
  {
    id: 6,
    title: "Behind the Scenes: A Day in the Life of Our BBQ Team",
    excerpt: "Take a peek behind the curtain and see what goes into preparing and executing a large-scale BBQ catering event.",
    date: "November 15, 2024",
    category: "Company News",
    slug: "bbq-team-day"
  }
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Tips, recipes, and insights from the Good Times BBQ team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-display tracking-wider bg-primary/10 text-primary rounded-full mb-3">
                    {post.category}
                  </span>
                  <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="text-primary font-semibold text-sm hover:underline">
                    Read More →
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 bg-gradient-maroon rounded-lg text-center">
            <h3 className="font-display text-2xl font-bold mb-4 text-primary-foreground">
              Stay Updated with Our Latest Posts
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for BBQ tips, event planning advice, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded bg-background text-foreground border border-border focus:outline-none focus:border-primary"
              />
              <Button className="bg-background text-foreground hover:bg-foreground hover:text-background font-display tracking-wider">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
