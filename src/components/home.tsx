import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionObserver from './SectionObserver';
import ContactForm from './ContactForm';
import SpaceBackground from './SpaceBackground';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              >
                Hi, I'm Anh Phan
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto md:mx-0 rounded-full mb-6"
              />
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl mb-4 text-foreground"
              >
                Full Stack Developer & ML Engineer
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-lg mb-8 text-muted-foreground max-w-2xl"
              >
                I build exceptional digital experiences that are fast,
                accessible, visually appealing, and responsive.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 justify-center md:justify-start"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-purple-500/50 text-foreground hover:bg-purple-500/10"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative flex justify-center items-center group">
                {/* Enhanced background glow effect */}
                <div className="absolute -inset-4 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
                
                {/* Image container with enhanced double border */}
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full relative transform group-hover:scale-105 transition-transform duration-500">
                  {/* Outer glow and border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-400/20 to-purple-500/30 p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 group-hover:border-purple-500/40 transition-colors duration-500"></div>
                  {/* Inner container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-300/20 dark:border-purple-400/20 shadow-xl group-hover:border-purple-400/30 transition-colors duration-500">
                    <img
                      src="/images/profile.png"
                      alt="Anh Phan"
                      className="w-full h-full object-cover object-[26%_center] transform group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-primary text-2xl">👨‍💻</span>
                    Career
                  </h3>
                  <p className="text-muted-foreground">
                    I'm a passionate graduate ML engineer with prior
                    experience in Large Language Models (LLMs) and AI.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-primary text-2xl">🎯</span>
                    Intuition
                  </h3>
                  <p className="text-muted-foreground">
                    My approach combines clean code with intuitive design to
                    deliver exceptional user experiences that help businesses
                    achieve their goals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-primary text-2xl">🌱</span>
                    Future Goals
                  </h3>
                  <p className="text-muted-foreground">
                    When I'm not coding, I explore new themes/UI templates to beautify frontend, learn
                    DSA algorithms, building personal projects and making meaningful websites for personal and public use.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-primary text-2xl">✨</span>
                    Quick Facts
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Location</h4>
                        <p className="text-muted-foreground">Based in Laurel, Maryland</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💼</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Experience</h4>
                        <p className="text-muted-foreground">1-2 years of professional experience in LLMs and Quality Assurance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🔧</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Tech Stack</h4>
                        <p className="text-muted-foreground">Researching and building LLM-based applications with Python, SQL, and React</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎓</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Education</h4>
                        <p className="text-muted-foreground">BS in Computer Science, Concentration in Cybersecurity from Bowie State University</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🗣️</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Languages</h4>
                        <p className="text-muted-foreground">Fluent in English and Vietnamese</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
                  allowFullScreen
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
