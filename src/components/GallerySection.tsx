import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "BBQ Burger with Fries" },
  { src: gallery2, alt: "Pulled Pork Sandwich" },
  { src: gallery3, alt: "BBQ Chicken Wings" },
  { src: gallery4, alt: "Smoked Beef Brisket" },
  { src: gallery5, alt: "BBQ Ribs with Corn" },
  { src: gallery6, alt: "Grilled Vegetables" },
  { src: gallery1, alt: "BBQ Burger with Fries" },
  { src: gallery2, alt: "Pulled Pork Sandwich" },
];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground text-center tracking-wider">
          OUR GALLERY
        </h2>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground rounded-full h-12 w-12 shadow-lg disabled:opacity-30"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground rounded-full h-12 w-12 shadow-lg disabled:opacity-30"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Gallery Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 md:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
