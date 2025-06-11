import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionObserver from "./SectionObserver";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const mainSkills = [
  { 
    name: "Python", 
    level: 90, 
    icon: "🐍",
    description: "Advanced Python development with focus on ML/AI, data analysis, and automation"
  },
  { 
    name: "JavaScript", 
    level: 85, 
    icon: "💛",
    description: "Modern JavaScript/TypeScript development with React and Node.js"
  },
  { 
    name: "React", 
    level: 85, 
    icon: "⚛️",
    description: "Building responsive and performant web applications with React ecosystem"
  },
  { 
    name: "ML/AI", 
    level: 80, 
    icon: "🤖",
    description: "Machine Learning model development and AI system implementation"
  },
  { 
    name: "Web Dev", 
    level: 85, 
    icon: "🌐",
    description: "Full-stack web development with modern frameworks and best practices"
  },
  { 
    name: "DevOps", 
    level: 75, 
    icon: "🔄",
    description: "CI/CD pipelines, containerization, and cloud infrastructure management"
  },
]

const skillCategories = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Scikit-learn", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "NLP", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
]

const SkillsSection = () => {
  return (
    <SectionObserver>
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>

          {/* Main Skills Circular Progress */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {mainSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Circular Progress Background */}
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-secondary"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <motion.circle
                        className="text-purple-500"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                          transform: "rotate(-90deg)",
                          transformOrigin: "50% 50%",
                        }}
                      />
                    </svg>
                    {/* Skill Icon and Level */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl mb-1 transform group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  {/* Skill Name and Description */}
                  <div className="text-center mt-2">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 p-2 bg-card/90 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover-glow border border-purple-500/10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 group-hover:scale-150 transition-transform" />
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}

export default SkillsSection;
