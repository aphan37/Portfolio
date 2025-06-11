import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./components/home";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactForm from "./components/ContactForm";
import WorkExperience from "./components/WorkExperience";
import SkillsSection from "./components/SkillsSection";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Add section transition observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".section-transition").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.documentElement.style.scrollBehavior = "";
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Decorative Background Elements */}
        <div className="bg-decoration" />
        <div className="grid-pattern fixed inset-0 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <main className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
                <div className="section-transition">
                  <WorkExperience />
                </div>
                <div className="section-transition">
                  <SkillsSection />
                </div>
                <div className="section-transition">
                  <ProjectsGrid />
                </div>
                <div className="section-transition">
                  <ContactForm />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Decorative Corner Accents */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <div className="corner-accent absolute top-8 left-8" />
          <div className="corner-accent absolute top-8 right-8" />
          <div className="corner-accent absolute bottom-8 left-8" />
          <div className="corner-accent absolute bottom-8 right-8" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
