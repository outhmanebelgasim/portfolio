import { useEffect, useState } from "react";
import { cn } from "../libs/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent",
        )}>
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary"
            href="#hero"
            onClick={() => setIsOpen(false)}>
            OB.
          </a>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 whitespace-nowrap">
                  {item.name}
                </a>
              ))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 text-foreground"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[999] md:hidden bg-background/95 backdrop-blur-md",
          "flex items-center justify-center flex-col transition-all duration-300",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none",
        )}>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-foreground"
          aria-label="Close Menu">
          <X size={28} />
        </button>

        <div className="flex flex-col items-center justify-center gap-8 text-2xl font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
