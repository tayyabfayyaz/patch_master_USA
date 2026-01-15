import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chenille Patch",
    description:
      "High-quality custom chenille patch.",
    image: "/Chenille_patch.png",
  },
  {
    id: 3,
    name: "Embroidery Patch",
    description:
      "High-quality custom embroidery patch.",
    image: "/Embroiderey_patch.png",
  },
  {
    id: 4,
    name: "Heat Transfer Vinyl",
    description:
      "High-quality custom heat transfer vinyl.",
    image: "/Heat_transfer_vinyle.jpeg",
  },
  {
    id: 5,
    name: "Leather Patch",
    description:
      "High-quality custom leather patch.",
    image: "/Leather_patch.jpg",
  },
  {
    id: 6,
    name: "Military Patch",
    description:
      "High-quality custom military patch.",
    image: "/millatry_patch.jpeg",
  },
  {
    id: 7,
    name: "PVC Rubber Patch",
    description:
      "High-quality custom PVC rubber patch.",
    image: "/PVC_Rubber_patch.png",
  },
  {
    id: 8,
    name: "Sport Patch",
    description:
      "High-quality custom sport patch.",
    image: "/sport_patch.jpeg",
  },
  {
    id: 10,
    name: "Woven Patch",
    description:
      "High-quality custom woven patch.",
    image: "/Woven_patch.png",
  },
  {
    id: 11,
    name: "Biker Patch",
    description:
      "High-quality custom biker patch.",
    image: "/sports_patch.jpeg",
  },
];

const Products = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-200 text-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Premium Custom Patches USA
            <br />
            <span className="text-amber-600">Made for Global Brands</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-black">
            Patchmaster USA is a trusted custom patches manufacturer,
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
                    <Link href="/quote">
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
            <Link href="/quote">
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
