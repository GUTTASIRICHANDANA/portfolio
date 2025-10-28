import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Shield, Lightbulb, Target, Award } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    label: 'Academic Excellence',
    value: '9.69/10 CGPA',
  },
  {
    icon: Shield,
    label: 'Specialization',
    value: 'Cybersecurity',
  },
  {
    icon: Code2,
    label: 'Core Expertise',
    value: 'Full Stack Development',
  },
];

const keyPoints = [
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Passionate about tackling complex challenges with innovative solutions',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and industry best practices',
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Building secure applications with vulnerability management expertise',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-spacing bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                I am a final-year <span className="text-primary font-semibold">B.Tech Computer Science & Engineering 
                (Cyber Security)</span> student at KL University, Vijayawada. With a passion for building secure, 
                scalable applications, I combine expertise in <span className="text-primary font-semibold">full-stack 
                development</span> and <span className="text-primary font-semibold">cybersecurity</span> to create 
                impactful solutions.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="soft-card p-6 text-center group hover:border-primary/50 transition-all"
                >
                  <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground mb-1">{highlight.label}</p>
                  <p className="font-semibold text-foreground">{highlight.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="soft-card p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
