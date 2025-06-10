import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsSection = ({
  skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "CSS/Tailwind", level: 80, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Express", level: 70, category: "Backend" },
    { name: "MongoDB", level: 65, category: "Backend" },
    { name: "PostgreSQL", level: 60, category: "Backend" },
    { name: "Figma", level: 75, category: "Design" },
    { name: "Adobe XD", level: 65, category: "Design" },
    { name: "UI/UX", level: 80, category: "Design" },
    { name: "Project Management", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 90, category: "Soft Skills" },
    { name: "Problem Solving", level: 85, category: "Soft Skills" },
  ],
  title = "My Skills",
  description = "Here are some of the skills I've acquired throughout my career.",
}: SkillsSectionProps) => {
  // Get unique categories
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="flex justify-center mb-8 flex-wrap">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SkillsSection;
