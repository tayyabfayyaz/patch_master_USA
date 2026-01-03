"use client";

import Link from "next/link"; // ✅ Next.js link
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const benefits = [
  "Premium quality",
  "No setup fee",
  "Free digitizing included",
];

export function SpecialOfferSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-6">
            Special B2B Offer
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Up to 50 Custom Patches – Only{" "}
            <span className="text-accent">$150</span>
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8">
            Free Worldwide Shipping Included
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Check className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-gold-dark text-lg px-10 py-6 transition-colors"
          >
            {/* Use next/link instead of react-router-dom */}
            <Link href="/contact" aria-label="Get your free quote">
              <MessageCircle className="mr-2 h-5 w-5 inline" />
              Get Your Free Quote Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
