import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { cn } from "../libs/utils.js";

const contactItems = [
  {
    label: "Email",
    value: "belgasimothmane@gmail.com",
    href: "mailto:belgasimothmane@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+212617109590",
    href: "tel:+212617109590",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Askejour, Mhamid, 40000 Marrakesh, Morocco",
    href: null,
    icon: MapPin,
  },
];

const externalLinks = [
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

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        message:
          "Email service is not configured yet. Add your EmailJS environment variables.",
      });
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields before sending.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        { publicKey },
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-x-clip bg-secondary/30 px-4 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground sm:mb-12 sm:text-base">
          Feel free to get in touch for collaborations, project opportunities,
          or any inquiries. I'm always open to discussing new ideas and building
          impactful solutions.
        </p>

        <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="min-w-0 rounded-2xl border border-border/60 bg-card/80 p-4 text-left sm:p-6 lg:p-8">
            <h3 className="mb-2 text-2xl font-semibold">Contact Information</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Reach me directly through email, phone, or social platforms.
            </p>

            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/30 p-3 sm:gap-4 sm:p-4">
                    <div className="rounded-full bg-primary/10 p-2.5 sm:p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-all text-sm text-foreground/90 transition-colors hover:text-primary sm:break-words sm:text-base">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-foreground/90 sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-border/60 pt-6">
              <h4 className="mb-4 font-medium">Connect With Me</h4>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {externalLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary sm:px-4"
                      aria-label={link.label}>
                      <span className="inline-flex min-w-0 items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="truncate">{link.label}</span>
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-border/60 bg-card/80 p-4 text-left shadow-xs sm:p-6 lg:p-8">
            <h3 className="mb-2 text-2xl font-semibold sm:text-3xl">
              Send A Message
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Share your idea or project details and I will reply as soon as
              possible.
            </p>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:px-4"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:px-4"
                  placeholder="username@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-y rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:px-4"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {submitStatus.message ? (
                <p
                  className={cn(
                    "text-sm",
                    submitStatus.type === "success"
                      ? "text-green-500"
                      : "text-red-500",
                  )}>
                  {submitStatus.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70",
                )}>
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
