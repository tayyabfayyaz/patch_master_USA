"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";

const sidebarNavLinks = [
  { name: "Our Story", href: "/about#our-story" },
  { name: "Our Vision", href: "/about#our-vision" },
  {
    name: "Our Commitment to Sustainability",
    href: "/about#our-commitment-to-sustainability",
  },
  { name: "Why Choose Us", href: "/about#why-chose-us" },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">About Us</h3>
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarNavLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <Link href={link.href} passHref>
                    <SidebarMenuButton
                      isActive={pathname === link.href}
                    >
                      {link.name}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <main className="flex-grow p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}