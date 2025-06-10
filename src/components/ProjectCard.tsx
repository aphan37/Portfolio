import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  liveUrl?: string;
  sourceUrl?: string;
  category?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project and the technologies used to build it.",
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  tags = ["React", "TypeScript", "Tailwind"],
  liveUrl = "#",
  sourceUrl = "#",
  category = "Web Development",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 h-full bg-card border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          className="absolute inset-0 bg-black/60 dark:bg-black/80 flex items-center justify-center opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.8 : 0,
          }}
        >
          <div className="flex gap-2">
            {liveUrl && (
              <Button size="sm" variant="secondary" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {sourceUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-1">
          <Badge variant="secondary" className="text-xs mb-2">
            {category}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
