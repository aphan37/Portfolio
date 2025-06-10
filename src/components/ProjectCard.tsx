import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string[];
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  github,
  demo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden bg-opacity-80 backdrop-blur-lg bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
        <div className="relative aspect-video group">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-500/50"
              onClick={() => window.open(github, '_blank')}
            >
              <Github size={16} />
              GitHub
            </Button>
            <Button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              onClick={() => window.open(demo, '_blank')}
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
