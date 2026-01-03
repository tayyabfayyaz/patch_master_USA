"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      const isHidden = mobileMenuRef.current.style.display === "none";
      mobileMenuRef.current.style.display = isHidden ? "block" : "none";
    }
  };

  const hideMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.display = "none";
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              Patch<span className="text-accent">Master</span>USA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-gold-dark"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className="md:hidden hidden py-4 border-t border-border"
          style={{ display: "none" }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={hideMobileMenu}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-gold-dark"
            >
              <Link href="/contact" onClick={hideMobileMenu}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}