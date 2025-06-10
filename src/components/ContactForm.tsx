import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-muted-foreground"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <Card className="p-6 md:p-8 bg-background/80 backdrop-blur-lg border-2 border-purple-500/20 dark:border-purple-500/30">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <Card className="p-6 md:p-8 bg-background/80 backdrop-blur-lg border-2 border-purple-500/20 dark:border-purple-500/30">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:anhphan502174@gmail.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="p-2 rounded-full bg-background group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span>anhphan502174@gmail.com</span>
                      </a>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-2 rounded-full bg-background">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span>Laurel, Maryland</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Connect With Me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/aphan37"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/anhphan37"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://leetcode.com/aphan37"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          className="h-5 w-5"
                          fill="currentColor"
                        >
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Resume</h3>
                    <a
                      href="/MLOps.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span>View Resume</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm; 