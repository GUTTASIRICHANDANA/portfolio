import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/2200039033_SiriChandanaGutta_Resume.pdf';
    link.download = '2200039033_SiriChandanaGutta_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-spacing pt-32 relative overflow-hidden">
      {/* Enhanced animated background with multiple layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/15 via-accent/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary/8 via-secondary/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Additional accent orbs */}
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Text Content - Enhanced typography and spacing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-2"
            >
              <div className="px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="text-primary font-semibold text-sm tracking-wide">👋 Welcome to my portfolio</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Gutta Siri Chandana
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                Full Stack Developer &
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Cybersecurity Enthusiast
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2"
            >
              B.Tech CSE (Cyber Security) | Passionate about building secure, scalable applications 
              and protecting digital infrastructure
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 px-8 backdrop-blur-sm"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="mailto:sirichandana.gutta@gmail.com"
                className="group p-3 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/20 hover:to-primary/30 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/guttasirichandana/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/20 hover:to-accent/30 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/GUTTASIRICHANDANA"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/20 hover:to-secondary/30 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image - Enhanced with modern styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-30 group-hover:opacity-50 blur-2xl animate-pulse transition-opacity duration-500" />
              
              {/* Rotating gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-75 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500" style={{ animationDuration: '8s' }} />
              
              {/* Image container with enhanced styling */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                {/* Inner gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                
                <img
                  src="/profile-image.png"
                  alt="Gutta Siri Chandana"
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Down indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center gap-2 group"
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 tracking-wide">
              Scroll Down
            </span>
            <div className="p-2 rounded-full border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
              <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
