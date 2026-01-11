"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const NavHeader = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-2">
          <NavbarButton href="/contact" variant="accent">
            <Phone className="w-4 h-4" />
            Get Free Consultation
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(item.link)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 pt-4 border-t border-border mt-2">
            <NavbarButton
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="accent"
              className="w-full"
            >
              <Phone className="w-4 h-4" />
              Get Free Consultation
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavHeader;