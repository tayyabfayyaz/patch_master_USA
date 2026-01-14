"use client";

import {
  Factory,
  Palette,
  DollarSign,
  Truck,
  FileCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Factory,
    title: "Factory-Direct Pricing",
    description:
      "No hidden charges with transparent, competitive pricing directly from our manufacturing facility.",
  },
  {
    icon: Palette,
    title: "In-House Design Support",
    description:
      "Expert embroidery digitizing and design support to bring your vision to life perfectly.",
  },
  {
    icon: DollarSign,
    title: "Low Minimums & Bulk Pricing",
    description:
      "Flexible order quantities with wholesale pricing options for businesses of all sizes.",
  },
  {
    icon: Truck,
    title: "Fast Turnaround & Free Shipping",
    description:
      "Quick production times with complimentary worldwide shipping on all orders.",
  },
  {
    icon: FileCheck,
    title: "Digital Proof Approval",
    description:
      "Review and approve your design proof before production begins for complete peace of mind.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-chose-us" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose PatchMasterUSA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional quality and service
            with every order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}