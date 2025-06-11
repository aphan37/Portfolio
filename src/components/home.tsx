import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Award, Building2, Calendar, MapPin, ChevronDown } from "lucide-react";
import SectionObserver from "./SectionObserver";
import ContactForm from './ContactForm';
import SpaceBackground from './SpaceBackground';

const experiences = [
  {
    company: "Bowie State University",
    position: "Machine Learning Researcher",
    duration: "Sep 2022 - May 2025",
    location: "Bowie, MD",
    description: [
      "Created automation scripts to filter 140,000 patient records, retrieving 42,000 unique patient IDs, which streamlined data processing and improved efficiency",
      "Improved MRI image quality by using Gaussian smoothing and enhancing sigma value to increase image sharpness for reducing epochs in training CNN model",
      "Collaborated with peers and faculty advisors to test training efficiency and model deployment readiness, ensuring models were optimized for real-world application"
    ],
    technologies: ["Python", "Machine Learning", "CNN", "Data Processing", "MRI Analysis"],
    achievements: [
      "Reduced data processing time by 60%",
      "Improved model accuracy by 25%",
      "Published 2 research papers"
    ],
    logo: "🎓"
  },
  {
    company: "FPT USA",
    position: "Quality Assurance Tester",
    duration: "Jan 2022 - Sep 2022",
    location: "Richardson, TX, USA",
    description: [
      "Created and executed 30+ test cases per sprint in a Linux environment for embedded set top box firmware to ensure reliability of the features",
      "Created regression and feature test plans based on new implement features to ensure set top box functionality, preventing UI and function bugs",
      "Used SSH, bash scripting, and log scraping to regularly audit set top box version, maintaining functionality and version integrity while there are no new implemented features"
    ],
    technologies: ["Linux", "SSH", "Bash Scripting", "Quality Assurance", "Embedded Systems"],
    achievements: [
      "Reduced bug reports by 40%",
      "Improved test coverage by 35%",
      "Received Employee of the Month award"
    ],
    logo: "🏢"
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SpaceBackground />
      <Header />

      <SectionObserver>
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4">
            {/* Floating Navigation Dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
              {['home', 'about', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-3 h-3 rounded-full my-4 transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-purple-500 scale-125'
                      : 'bg-purple-500/30 hover:bg-purple-500/50'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center justify-between gap-12"
                >
                  <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Hi, I'm{" "}
                      </span>
                      <motion.span
                        className="text-foreground inline-block"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        Anh Phan
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-muted-foreground mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Machine Learning Engineer & Full Stack Developer
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-4 justify-center md:justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.a
                        href="#contact"
                        className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Get in Touch</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                      <motion.a
                        href="#projects"
                        className="px-8 py-3 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500/10 transition-colors relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">View Projects</span>
                        <motion.div
                          className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <motion.div
                      className="relative w-64 h-64 md:w-80 md:h-80"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.img
                        src="/images/profile.png"
                        alt="Profile"
                        className="relative w-full h-full object-cover rounded-full border-4 border-purple-500/20"
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Available for Work
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-6 h-6 text-purple-500" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <motion.section
          id="about"
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div
              className="flex flex-col md:flex-row gap-8 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2 space-y-6">
                {[
                  {
                    icon: "👨‍💻",
                    title: "Career",
                    content: "I'm a passionate graduate ML engineer with prior experience in Large Language Models (LLMs) and AI.",
                  },
                  {
                    icon: "🎯",
                    title: "Intuition",
                    content: "My approach combines clean code with intuitive design to deliver exceptional user experiences that help businesses achieve their goals.",
                  },
                  {
                    icon: "🌱",
                    title: "Future Goals",
                    content: "When I'm not coding, I explore new themes/UI templates to beautify frontend, learn DSA algorithms, building personal projects and making meaningful websites for personal and public use.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="text-primary text-2xl">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:w-1/2"
              >
                <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-primary text-2xl">✨</span>
                    Quick Facts
                  </h3>
                  <div className="space-y-6">
                    {[
                      { icon: "📍", title: "Location", content: "Based in Laurel, Maryland" },
                      { icon: "💼", title: "Experience", content: "2+ years in Software Development" },
                      { icon: "🎓", title: "Education", content: "B.S. in Computer Science" },
                      { icon: "🚀", title: "Skills", content: "Full Stack Development, Machine Learning, AI" },
                    ].map((fact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">{fact.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                            {fact.title}
                          </h4>
                          <p className="text-muted-foreground">{fact.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          id="experience"
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </motion.h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.logo}
                      </motion.span>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <p>{exp.duration}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        <p>{exp.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Building2 size={16} />
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Award size={16} />
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-sm bg-purple-500/10 text-purple-500 rounded-full"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </SectionObserver>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <ProjectsGrid />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <SkillsSection />
      </section>

      {/* Playlist Section */}
      <section id="playlist" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Playlist
          </motion.h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Something chilly for coding.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-muted rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] md:aspect-[16/9] w-full">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/6lQzAWe0JqRnC9OgszlBfH?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Anh Phan. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

