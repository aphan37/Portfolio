import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  liveLink?: string;
  sourceLink?: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({ projects = [] }: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Default projects if none are provided
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform built with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      category: "web",
      liveLink: "https://example.com",
      sourceLink: "https://github.com/example/project",
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description: "A secure banking application developed for iOS and Android",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      category: "mobile",
      liveLink: "https://example.com/banking-app",
    },
    {
      id: "3",
      title: "Dashboard UI Design",
      description:
        "A modern analytics dashboard with interactive data visualization",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "design",
      liveLink: "https://example.com/dashboard",
    },
    {
      id: "4",
      title: "Social Media Platform",
      description:
        "A community-focused social platform with real-time messaging",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      category: "web",
      liveLink: "https://example.com/social",
      sourceLink: "https://github.com/example/social",
    },
    {
      id: "5",
      title: "Fitness Tracker App",
      description: "An app that helps users track workouts and nutrition goals",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
      category: "mobile",
      liveLink: "https://example.com/fitness",
    },
    {
      id: "6",
      title: "Brand Identity Design",
      description:
        "Complete brand identity package for a sustainable fashion brand",
      image:
        "https://images.unsplash.com/photo-1600775508114-5c30cf941c08?w=800&q=80",
      category: "design",
      liveLink: "https://example.com/brand",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Get unique categories for filter buttons
  const categories = [
    "all",
    ...new Set(displayProjects.map((project) => project.category)),
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all"
      ? displayProjects
      : displayProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-background w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore my recent work across various domains including web
          development, mobile applications, and UI/UX design.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              liveLink={project.liveLink}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
