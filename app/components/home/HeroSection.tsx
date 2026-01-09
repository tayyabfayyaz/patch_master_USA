"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Premium Custom Patches
          <br />
          <span className="text-accent">Made in USA</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Trusted by apparel brands, teams, and businesses worldwide.
          Factory-direct quality with precision craftsmanship.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-gold-dark text-lg px-8"
          >
            <Link href="/quote">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
          >
            <Link href="/products">View Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
