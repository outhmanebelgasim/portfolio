import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/outhmane-belgasim-1645a3276",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/outhmanebelgasim",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/belgasim_outhmane/",
    icon: FaInstagram,
  },
];

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-card/40 px-4 py-12 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-border/60 pb-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="text-left">
            <a href="#hero" className="inline-flex items-center text-xl font-bold text-primary">
              OB.
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Freelance full-stack engineer crafting modern, reliable digital
              experiences with clean architecture and thoughtful UX.
            </p>

            <a
              href="mailto:belgasimothmane@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary">
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="text-left">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Follow
            </h4>
            <div className="space-y-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex w-full items-center justify-between rounded-lg border border-border/50 bg-background/30 px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary sm:max-w-xs">
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5" />
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {year} Outhmane Belgasim. All rights reserved.
          </p>
          <a
            href="#hero"
            className="text-xs text-foreground/70 transition-colors hover:text-primary">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
