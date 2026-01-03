import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-wide hover:text-accent transition-colors"
          >
            Patch<span className="text-accent">Master</span>USA
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-primary-foreground/20" />

        {/* Copyright */}
        <p className="mt-6 text-center text-sm text-primary-foreground/80">
          © {new Date().getFullYear()} PatchmasterUSA.com —  
          All Rights Reserved | Premium Custom Patches Manufacturer USA
        </p>
      </div>
    </footer>
  );
}
