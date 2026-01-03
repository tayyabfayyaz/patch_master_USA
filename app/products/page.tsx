import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Custom Embroidered Patches",
    description:
      "Classic, professional look with raised thread designs. Perfect for uniforms, caps, and jackets with vibrant colors and durability.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 2,
    name: "Woven Patches",
    description:
      "Intricate details with a smooth, flat finish. Ideal for detailed logos and smaller text with a refined appearance.",
    image:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80",
  },
  {
    id: 3,
    name: "Leather Patches",
    description:
      "Premium, sophisticated look with genuine or faux leather. Perfect for jeans, bags, and high-end apparel branding.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: 4,
    name: "PVC / Rubber Patches",
    description:
      "3D dimensional designs that are waterproof and durable. Great for outdoor gear, tactical wear, and sports teams.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=600&q=80",
  },
  {
    id: 5,
    name: "Chenille Patches",
    description:
      "Soft, fuzzy texture with a vintage varsity feel. Popular for letterman jackets, school apparel, and retro designs.",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  },
];

const Products = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Premium Custom Patches USA
            <br />
            <span className="text-accent">Made for Global Brands</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Patchmaster USA is a trusted custom patches manufacturer in the USA,
            delivering high-end custom patches for apparel brands, uniform makers,
            corporate partners, retailers, and resellers across the United States,
            Canada, UK & Europe.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We specialize in custom embroidered patches, woven patches, leather
            patches, PVC / rubber patches, and chenille patches—crafted with
            precision, durability, and premium materials to elevate your brand
            identity.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our wide range of premium custom patches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-gold-dark"
                  >
                    <Link href="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Custom Patches?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let our experts help bring your
            design to life.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-gold-dark text-lg px-10"
          >
            <Link href="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Products;
