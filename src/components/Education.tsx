import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (Cyber Security)',
    institution: 'KL University, Vijayawada',
    grade: '9.69/10 CGPA',
    duration: '2023 - 2026',
    description: 'Specialized in cybersecurity, network security, cryptography, and secure software development.',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Sri Vasavi Institute of Engineering and Technology, Machilipatnam',
    grade: '9.2/10 CGPA',
    duration: '2020 - 2023',
    description: 'Foundation in computer science fundamentals, programming, and software development.',
  },
  {
    degree: 'Secondary Education',
    institution: 'Dr K K R Gowtham Concept High School, Gudivada',
    grade: '100%',
    duration: '2019 - 2020',
    description: 'Excellent academic performance with focus on science and mathematics.',
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-spacing bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 shadow-md z-10" />

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="soft-card p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-1 text-foreground">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.duration}</p>
                      <p className="text-accent font-semibold mb-3">{edu.grade}</p>
                      <p className="text-sm text-foreground">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
