import { WhyChooseSection } from "@/app/components/about/WhyChooseSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Target,
  Shield,
  Heart,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every patch we create, never compromising on quality.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We view every client as a partner, working together to achieve their vision.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Attention to detail is at the core of everything we do, from design to delivery.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Consistent quality and on-time delivery you can count on, every single order.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We're passionate about patches and it shows in the quality of our work.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Constantly improving our processes and embracing new technologies.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-accent">PatchMasterUSA</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Your trusted partner for premium custom patches. We’re dedicated to
            craftsmanship, quality, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section id="our-story" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Our Story
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                PatchMasterUSA was founded with a simple mission: to deliver
                premium custom patches at competitive prices. What started as a
                small operation has grown into a trusted name serving clients
                across the USA, Canada, UK, and Europe.
              </p>

              <p>
                Our founders identified a gap in the market for truly premium
                patches that meet the standards of top global brands. With
                passion and precision, we built a state-of-the-art manufacturing
                facility operated by skilled artisans.
              </p>

              <p>
                Today, we proudly work with apparel brands, sports teams,
                corporate organizations, and military units—each patch
                reflecting our commitment to excellence and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="our-vision" className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Our Vision
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Our vision is to be the world’s most trusted and innovative
                custom patch manufacturer. We aim to empower brands, teams, and
                individuals to express their identity and tell their stories
                through high-quality, custom-made patches. We are committed to
                sustainable practices, exceptional customer service, and a
                culture of continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Sustainability Section */}
      <section
        id="our-commitment-to-sustainability"
        className="py-16 md:py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Our Commitment to Sustainability
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                At PatchMasterUSA, we are committed to protecting our planet for
                future generations. We believe that great products shouldn’t
                come at the expense of the environment. That’s why we’ve
                integrated sustainable practices into every aspect of our
                operations, from sourcing materials to our manufacturing
                processes.
              </p>
              <p>
                Our commitment to sustainability includes using eco-friendly
                materials, reducing waste, and conserving energy. We partner with
                suppliers who share our values and are dedicated to responsible
                sourcing. We are constantly exploring new ways to minimize our
                environmental footprint and make a positive impact on the
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to creation, we ensure excellence at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Design Consultation",
                desc: "We understand your vision and requirements.",
              },
              {
                step: "02",
                title: "Digital Proof",
                desc: "You approve a detailed mockup before production.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Crafted with premium materials and advanced machinery.",
              },
              {
                step: "04",
                title: "Quality & Delivery",
                desc: "Inspected carefully and shipped worldwide.",
              },
            ].map((item) => (
              <Card key={item.step} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <span className="block text-4xl font-bold text-accent mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />

    </>
  );
};

export default About;
