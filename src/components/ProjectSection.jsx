import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ELearning-Plateforme",
    description:
      "Web-based e-learning platform for managing and delivering PDF courses, with features designed for both professors and students.",
    image: "/projects/e-learning-platfrorme.png",
    tags: ["HTML", "CSS", "JS", "PHP"],
    url: "https://github.com/outhmanebelgasim/eLearning-platform",
  },

  {
    id: 2,
    title: "Freshcery Store",
    description:
      "E-commerce platform featuring user and admin dashboards, with secure PayPal payment integration and product management features.",
    image: "/projects/freshcery.png",
    tags: ["HTML", "CSS", "JS", "PHP"],
    url: "https://github.com/outhmanebelgasim/freshcery-ecom",
  },

  {
    id: 3,
    title: "Pro Personal Academy",
    description:
      "Modern landing page built to present online teaching services, focusing on clean design, clear content structure, and usability.",
    image: "/projects/pro-personal-academy.png",
    tags: ["Next", "TypeScript"],
    url: "https://github.com/outhmanebelgasim/pro-personal-academy",
  },

  {
    id: 4,
    title: "Book Reviews",
    description:
      "Laravel-based web application for browsing books and submitting reviews, designed with simplicity and usability without user authentication.",
    image: "/projects/book-review.png",
    tags: ["Tailwind", "JS", "Laravel", "MySQL"],
    url: "https://github.com/outhmanebelgasim/book-reviews",
  },

  {
    id: 5,
    title: "Task List Manager",
    description:
      "Full-stack task management app built with Laravel, Inertia.js, and React, supporting CRUD operations, search, filtering, and pagination.",
    image: "/projects/task-list.png",
    tags: ["Tailwind", "React", "TypeScript", "Laravel", "MySQL"],
    url: "https://github.com/outhmanebelgasim/task-list",
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore a selection of projects built while improving my web
          development skills, focusing on clean code, functionality, and user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden border border-border/60 bg-card/80 card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center pt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-foreground/80 transition-colors duration-300 hover:text-primary"
                    aria-label={`Open ${project.title}`}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/outhmanebelgasim"
            target="_blank">
            {" "}
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
