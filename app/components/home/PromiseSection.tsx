import { Settings, Search, Users, Globe } from "lucide-react";

const promises = [
  {
    icon: Settings,
    title: "Precision Craftsmanship",
    description: "Advanced machines for flawless execution",
  },
  {
    icon: Search,
    title: "Quality Inspection",
    description: "Careful inspection on every order",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "From design to delivery support",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Reliable delivery to any location",
  },
];

export function PromiseSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Promise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality and excellence in every stitch, guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <promise.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {promise.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-secondary rounded-xl max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-primary">
            Trusted by apparel brands, teams, and businesses around the world.
          </p>
        </div>
      </div>
    </section>
  );
}