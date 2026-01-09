"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah L.",
    quote:
      "The custom patches I ordered exceeded my expectations. The quality is outstanding, and the team was incredibly helpful throughout the design process. I'll definitely be a returning customer!",
    avatar: "/patch_10.jpg",
  },
  {
    name: "John D.",
    quote:
      "PatchMasterUSA is our go-to for all our corporate branding needs. Their attention to detail and fast turnaround times are unmatched. Highly recommended!",
    avatar: "/patch_12.jpg",
  },
  {
    name: "Emily R.",
    quote:
      "I was so impressed with the vibrant colors and durability of the woven patches I received. They are perfect for my apparel line. Thank you, PatchMasterUSA!",
    avatar: "/patch_14.png",
  },
  {
    name: "Michael B.",
    quote:
      "The leather patches I got for my jackets are top-notch. The quality is evident, and they add a premium feel to my products. The customer service was excellent too.",
    avatar: "/patch_15.jpg",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering exceptional quality and service. Here's
            what our clients have to say about their experience with
            PatchMasterUSA.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar>
                          <AvatarImage
                            src={review.avatar}
                            alt={review.name}
                          />
                          <AvatarFallback>
                            {review.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">
                            {review.name}
                          </h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 text-amber-500 fill-amber-500"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">"{review.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
