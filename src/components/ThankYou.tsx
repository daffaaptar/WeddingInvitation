import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

export const ThankYou = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-section relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 max-w-2xl mx-auto"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/20"
        >
          <Heart className="w-24 h-24" />
        </motion.div>

        <h2 className="font-serif text-4xl md:text-5xl text-gold mb-8">Thank You</h2>
        <p className="text-white/80 mb-6 leading-relaxed">
          We are deeply grateful for your presence, whether virtual or physical, in celebrating our love story. 
          Your support and blessings mean the world to us as we begin this beautiful journey together.
        </p>
        <p className="font-serif text-2xl text-gold">
          Sarah & Maman
        </p>
      </motion.div>
    </section>
  );
};