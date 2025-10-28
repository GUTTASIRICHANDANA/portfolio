import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-5);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {cursorTrail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0.5,
            x: point.x - 4,
            y: point.y - 4 
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
          }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 border border-primary/60"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      />
    </>
  );
};
