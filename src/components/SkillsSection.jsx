import { useState } from "react";
import { cn } from "../libs/utils.js";
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "TypeScript", level: 65, category: "frontend" },

  // Backend
  { name: "PHP", level: 80, category: "backend" },
  { name: "Laravel", level: 78, category: "backend" },

  // DevOps & Cloud
  { name: "Linux", level: 75, category: "devops" },
  { name: "Ubuntu", level: 75, category: "devops" },
  { name: "PowerShell", level: 65, category: "devops" },
  { name: "Postman", level: 70, category: "devops" },
  { name: "VMware", level: 70, category: "devops" },
  { name: "VirtualBox", level: 70, category: "devops" },
  { name: "GNS3", level: 60, category: "devops" },
  { name: "Cisco", level: 65, category: "devops" },

  // Databases
  { name: "MySQL", level: 75, category: "database" },
  { name: "PostgreSQL", level: 70, category: "database" },

  // Programming
  { name: "Java", level: 65, category: "programming" },
  { name: "C", level: 60, category: "programming" },
  { name: "C++", level: 60, category: "programming" },
  { name: "Python", level: 70, category: "programming" },

  // Tools & Environment
  { name: "VS Code", level: 85, category: "tools" },
  { name: "Eclipse", level: 60, category: "tools" },

  // Design
  { name: "UML", level: 65, category: "design" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "devops",
  "database",
  "programming",
  "tools",
  "design",
];

const iconBySkill = {
  "HTML/CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  Ubuntu:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
  PowerShell:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Cisco:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg",
  GNS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg",
  VMware:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vmware/vmware-original.svg",
  VirtualBox:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg",
  "Laravel Herd":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Eclipse:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
  UML: "https://cdn.simpleicons.org/plantuml",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border border-border/60 bg-card/80 transition-colors duration-300 capitalize hover:border-primary/50 hover:bg-primary/10",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const iconUrl = iconBySkill[skill.name];

            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-5 card-hover">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mb-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-left font-semibold text-lg">
                      {skill.name}
                    </h3>
                    {/* <p className="mt-1 text-left text-xs font-medium text-muted-foreground">
                      {skill.category}
                    </p> */}
                  </div>

                  <div className="shrink-0 rounded-xl border border-primary/30 bg-primary/10 p-2">
                    <img
                      src={iconUrl}
                      alt={`${skill.name} icon`}
                      className="h-5 w-5"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                      }}
                    />
                  </div>
                </div>

                <div className="relative w-full h-2 rounded-full overflow-hidden bg-secondary/50">
                  <div
                    className="bg-primary h-2 rounded-full origin-left"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="mt-2 text-right text-sm font-medium text-primary/90">
                  {skill.level}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
