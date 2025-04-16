"use client";

import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About", delay: "0.1s" },
    { id: "experience", label: "Experience", delay: "0.2s" },
    { id: "skills", label: "Skills", delay: "0.3s" },
    { id: "contact", label: "Contact", delay: "0.4s" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // height of navbar

      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      // Calculate position accounting for scroll and navbar height
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      // Use scrollTo instead of scrollIntoView for better control
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="font-bold text-xl flex items-center gap-2 hover-lift"
          >
            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-in">
              GS
            </span>
            <span
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Gaganpreet Singh
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-foreground/80 hover-lift animate-fade-in"
                style={{ animationDelay: link.delay }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover-lift animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 sm:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-foreground/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col space-y-4 px-4 py-6 bg-background/80 backdrop-blur-sm border-t border-foreground/10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-foreground/80 animate-slide-in-right text-left"
                  style={{ animationDelay: link.delay }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 w-fit animate-slide-in-right"
                style={{ animationDelay: "0.6s" }}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
