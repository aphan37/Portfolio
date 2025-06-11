import React, { useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Building2, Calendar, MapPin, ChevronDown, ChevronUp, Search, Code2, Sparkles } from "lucide-react"
import { useVirtualizer } from '@tanstack/react-virtual'

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
]

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const parentRef = React.useRef<HTMLDivElement>(null)

  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      const matchesFilter = filter === "all" || 
        exp.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
      
      const matchesSearch = searchQuery === "" || 
        exp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.description.some(desc => desc.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesFilter && matchesSearch
    })
  }, [filter, searchQuery])

  const rowVirtualizer = useVirtualizer({
    count: filteredExperiences.length,
    getScrollElement: () => parentRef.current,
    estimateSize: useCallback(() => 100, []),
    overscan: 5,
  })

  const handleKeyPress = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setExpandedIndex(expandedIndex === index ? null : index)
    }
  }, [expandedIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  }

  const expandVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    },
    exit: { 
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    }
  }

  return (
    <motion.section
      id="experience"
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Exploring my path through technology, innovation, and continuous learning
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <motion.div 
              className="relative flex-1 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
            </motion.div>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["all", "ml", "ai", "web", "mobile"].map((tech, index) => (
                <motion.button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filter === tech
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : "bg-card/50 backdrop-blur-sm text-purple-500 hover:bg-purple-500/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div
          ref={parentRef}
          className="max-w-4xl mx-auto h-[600px] overflow-auto"
          style={{ contain: 'strict' }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatePresence mode="wait">
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const exp = filteredExperiences[virtualRow.index]
                  return (
                    <motion.div
                      key={virtualRow.index}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                      variants={itemVariants}
                      className="group relative"
                    >
                      {/* Timeline Line */}
                      <motion.div 
                        className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      
                      {/* Experience Card */}
                      <div className="ml-12">
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/10 group-hover:border-purple-500/30"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <motion.div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl text-white shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                {exp.logo}
                              </motion.div>
                              <div>
                                <h3 className="text-xl font-bold text-foreground">
                                  {exp.position}
                                </h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                              </div>
                            </div>
                            <motion.button
                              className="text-purple-500 hover:text-purple-600 transition-colors"
                              onClick={() => setExpandedIndex(expandedIndex === virtualRow.index ? null : virtualRow.index)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {expandedIndex === virtualRow.index ? <ChevronUp /> : <ChevronDown />}
                            </motion.button>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Expanded Content */}
                          <AnimatePresence mode="wait">
                            {expandedIndex === virtualRow.index && (
                              <motion.div
                                variants={expandVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-6 overflow-hidden"
                              >
                                {/* Responsibilities */}
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <Building2 size={16} />
                                    Key Responsibilities
                                  </h4>
                                  <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                      <motion.li
                                        key={i}
                                        className="text-muted-foreground pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-purple-500"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                      >
                                        {item}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <Award size={16} />
                                    Key Achievements
                                  </h4>
                                  <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                      <motion.li
                                        key={i}
                                        className="text-muted-foreground pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-purple-500"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                      >
                                        {achievement}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Technologies */}
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <Code2 size={16} />
                                    Technologies
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                      <motion.span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-500 rounded-full border border-purple-500/20"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                      >
                                        {tech}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkExperience 