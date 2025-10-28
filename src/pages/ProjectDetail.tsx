import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';

// ✅ Define a type so both GitHub and Prototype URLs are optional
type Project = {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
  images: string[];
  github?: string;
  prototypeUrl?: string;
};

// ✅ Your complete project data
const projectsData: Record<string, Project> = {
  'secure-email-gateway': {
    title: 'Secure Email Gateway',
    description:
      'A comprehensive email security solution designed to protect organizations from spam, phishing, and malware attachments.',
    fullDescription: `This project implements a multi-layered security approach to email filtering and threat detection.
    The system analyzes incoming emails using machine learning algorithms to identify potential threats before they reach user inboxes.`,
    tech: ['Python', 'Flask', 'Bootstrap', 'Machine Learning', 'NLP', 'SQLite'],
    features: [
      'Real-time spam detection using ML algorithms',
      'Phishing URL detection and analysis',
      'Malware attachment scanning',
      'Email content filtering',
      'Comprehensive admin dashboard',
      'Email quarantine management',
      'Detailed reporting and analytics',
    ],
    challenges: [
      'Implementing accurate spam detection with low false positives',
      'Optimizing performance for high-volume email processing',
      'Creating an intuitive admin interface',
    ],
    outcomes: [
      'Achieved 95% spam detection accuracy',
      'Integrated seamlessly with email infrastructure',
      'Reduced email-based incidents by 80%',
    ],
    images: [
      'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    ],
    prototypeUrl: 'https://agency-pride-32157898.figma.site/',
  },

  'vulnerability-dashboard': {
    title: 'Vulnerability Management Dashboard',
    description:
      'A real-time vulnerability tracking system with automated scanning and detailed reporting.',
    fullDescription: `A MERN stack-based Vulnerability Management Dashboard designed to help organizations efficiently track, analyze, and remediate security vulnerabilities.
    The platform integrates with automated scanning tools and displays real-time analytics through an interactive dashboard.`,
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Chart.js', 'Docker'],
    features: [
      'Automated vulnerability scanning and detection',
      'Real-time data visualization with interactive charts',
      'Risk-based vulnerability prioritization',
      'Integration with CVE and threat intelligence databases',
      'Customizable reports and insights',
      'Team-based access control and collaboration tools',
      'End-to-end remediation tracking',
    ],
    challenges: [
      'Efficiently handling large-scale vulnerability data',
      'Designing optimized MongoDB aggregation pipelines',
      'Ensuring real-time data updates with minimal latency',
    ],
    outcomes: [
      'Reduced vulnerability remediation time by 60%',
      'Enhanced collaboration between security and development teams',
      'Delivered full-cycle visibility into organizational security posture',
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    ],
    github: 'https://github.com/GUTTASIRICHANDANA/vulnerability_dashboard',
  },
};

// ✅ Project Detail Component
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          {/* Project Card */}
          <div className="glass-card p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Prototype or GitHub Button */}
            <div className="flex gap-4 mb-12">
              {project.prototypeUrl ? (
                <Button className="cyber-glow hover:cyber-glow-strong" asChild>
                  <a
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    View Prototype
                  </a>
                </Button>
              ) : project.github ? (
                <Button className="cyber-glow hover:cyber-glow-strong" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </a>
                </Button>
              ) : null}
            </div>

            {/* Project Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-lg shadow-xl"
                />
              ))}
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  About the Project
                </h2>
                <p className="text-lg leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  Challenges
                </h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  Outcomes
                </h2>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
