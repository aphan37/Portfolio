import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const SkillsSection = ({
  skills = [
    // Machine Learning & AI
    { name: "Python", level: 90, category: "Machine Learning & AI", icon: "🐍" },
    { name: "LLMs & AI", level: 85, category: "Machine Learning & AI", icon: "🤖" },
    { name: "TensorFlow", level: 75, category: "Machine Learning & AI", icon: "🧮" },
    { name: "NLP", level: 80, category: "Machine Learning & AI", icon: "📝" },
    { name: "Data Analysis", level: 85, category: "Machine Learning & AI", icon: "📊" },
    
    // Frontend Development
    { name: "React", level: 85, category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", level: 80, category: "Frontend", icon: "📘" },
    { name: "Tailwind", level: 85, category: "Frontend", icon: "🎨" },
    { name: "JavaScript", level: 90, category: "Frontend", icon: "💛" },
    { name: "UI/UX", level: 85, category: "Frontend", icon: "🎯" },
    
    // Backend Development
    { name: "Node.js", level: 75, category: "Backend", icon: "🟢" },
    { name: "FastAPI", level: 85, category: "Backend", icon: "⚡" },
    { name: "PostgreSQL", level: 80, category: "Backend", icon: "🐘" },
    { name: "REST APIs", level: 85, category: "Backend", icon: "🔌" },
    { name: "MongoDB", level: 75, category: "Backend", icon: "🍃" },
    
    // Tools & DevOps
    { name: "Git", level: 90, category: "Tools", icon: "📦" },
    { name: "Docker", level: 75, category: "Tools", icon: "🐳" },
    { name: "AWS", level: 70, category: "Tools", icon: "☁️" },
    { name: "Linux", level: 80, category: "Tools", icon: "🐧" },
    { name: "CI/CD", level: 85, category: "Tools", icon: "🔄" }
  ]
}: SkillsSectionProps) => {
  // Get unique categories
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  const getExperienceLevel = (level: number) => {
    if (level >= 85) return "Expert";
    if (level >= 75) return "Advanced";
    return "Intermediate";
  };

  const getExperienceColor = (level: number) => {
    if (level >= 85) return "bg-green-500/10 text-green-500";
    if (level >= 75) return "bg-blue-500/10 text-blue-500";
    return "bg-orange-500/10 text-orange-500";
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-background/80 backdrop-blur-lg border-2 border-purple-500/20 dark:border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-foreground">
                          <span>{skill.name}</span>
                          <span className="text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
