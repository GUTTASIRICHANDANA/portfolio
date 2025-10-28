import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'secure-email-gateway',
    title: 'Secure Email Gateway',
    description: 'A comprehensive email security solution with spam detection, phishing protection, and malware scanning.',
    tech: ['Python', 'Flask', 'Bootstrap', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop',
    prototypeUrl: 'https://agency-pride-32157898.figma.site/',
  },
  {
    id: 'vulnerability-dashboard',
    title: 'Vulnerability Management Dashboard',
    description: 'Real-time vulnerability tracking and management system with automated scanning and reporting.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: 'https://github.com/GUTTASIRICHANDANA/vulnerability_dashboard',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-spacing" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="soft-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 rounded-full font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 items-center">
                    <Button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="flex-1"
                    >
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>

                    {project.prototypeUrl ? (
                      <Button
                        variant="outline"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Prototype">
                          <div className="flex items-center gap-2 px-3 py-2">
                            <Globe className="h-4 w-4" />
                            <span className="text-sm">Live Prototype</span>
                          </div>
                        </a>
                      </Button>
                    ) : project.github ? (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
