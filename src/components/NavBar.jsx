import { useEffect, useState } from "react";
import { cn } from "../libs/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-x5"
          : "py-5",
      )}>
      <div className="container flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
        <a
          className="min-w-0 shrink text-xl font-bold text-primary flex items-center"
          href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">
              {" "}
              Outhmane Belgasim{" "}
            </span>{" "}
            Portfolio
          </span>
        </a>

        <div className="relative z-50 flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {item.name}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/*mobile version */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
