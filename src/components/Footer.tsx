import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border py-8 bg-card">
      <div className="container mx-auto px-4">
        {/* Quick Links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-center md:text-left text-muted-foreground">
            © 2025 Gutta Siri Chandana. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:sirichandana.gutta@gmail.com"
              className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/guttasirichandana/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://github.com/GUTTASIRICHANDANA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
