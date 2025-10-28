import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Award, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const internships = [
  {
    title: 'Cyber Security Virtual Intern',
    company: 'Prodigy InfoTech',
    duration: 'June 2024',
    description: 'Gained hands-on experience in vulnerability assessment, penetration testing, and secure coding practices.',
    achievements: [
      'Conducted security audits on web applications',
      'Implemented security best practices',
      'Learned to identify and mitigate common web application vulnerabilities.',
    ],
  },
  {
    title: 'Ethical Hacking Virtual Intern',
    company: 'AICTE',
    duration: 'July 2024 – September 2024',
    description: 'Gained hands-on experience in identifying and mitigating cybersecurity threats, performing vulnerability analysis, penetration testing, and applying ethical hacking methodologies using Kali Linux and OWASP frameworks.',
    achievements: [
      'Configured and secured network devices',
      'Implemented network monitoring solutions',
      'Analyzed network traffic for security threats',
    ],
  },
];

const certifications = [
  {
    title: 'NSDC PMKVY - Python Programming',
    issuer: 'National Skill Development Corporation',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    verifyLink: 'https://drive.google.com/file/d/1PYIAw-IDqvNNPbk650MmFU3L4p7QQ51N/view',
  },
  {
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    verifyLink: 'https://drive.google.com/file/d/1ZssnCJ2SuWlwpxAKPexZc-eGqwvepyrd/view',
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    verifyLink: 'https://drive.google.com/file/d/1NpFuXOQxCUWIr6w9xuv3nfnh7oCSvp3U/view',
  },
  {
    title: 'JNCIA-Junos',
    issuer: 'Juniper Networks',
    date: '2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    verifyLink: 'https://www.credly.com/badges/ffb9e3ae-cc40-4e80-929a-e9cd4d34d972',
  },
  {
    title: 'Fintech Professional Certificate',
    issuer: 'Industry Certification',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    verifyLink: 'https://drive.google.com/file/d/1P1uXayPgRvh1wE6xro3A7Okn6v0VMwx-/view',
  },
  {
    title: 'Automation Anywhere Certified Essentials RPA Professional',
    issuer: 'Automation Anywhere',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    verifyLink: 'https://certificates.automationanywhere.com/04e7887c-ca03-4c4b-a3d0-ed3c0eef2626#acc.JwOBtm9g',
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="experience" className="section-spacing bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            Experience & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />

          {/* Internships */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-2 text-foreground">
              <Briefcase className="text-primary" />
              Internships
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="soft-card p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-foreground">{internship.title}</h4>
                    <span className="text-primary font-medium">{internship.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-3 font-medium">{internship.company}</p>
                  <p className="mb-4 text-foreground">{internship.description}</p>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-2 text-foreground">
              <Award className="text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  className="soft-card overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-3xl bg-background border-primary/30 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-foreground">{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={selectedCert?.image}
              alt={selectedCert?.title}
              className="w-full rounded-lg shadow-md"
            />
            <div className="space-y-2">
              <p className="text-lg text-foreground"><span className="font-semibold">Issuer:</span> {selectedCert?.issuer}</p>
              <p className="text-lg text-foreground"><span className="font-semibold">Date:</span> {selectedCert?.date}</p>
              <a
                href={selectedCert?.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
              >
                Verify Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
