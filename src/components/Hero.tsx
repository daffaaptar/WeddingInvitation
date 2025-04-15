import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen relative flex items-center justify-center bg-navy text-white px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-content relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/20"
        >
          <Heart className="w-32 h-32" />
        </motion.div>

        <h1 className="font-serif text-4xl mt-8 md:mt-28 md:text-7xl mb-8">
          Sarah & Maman
        </h1>
        <div className="relative mb-8 max-w-2xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1507829770566-e67a7bc03394?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sarah and Jajang"
            className="w-full rounded-lg shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 border-2 border-gold rounded-lg transform translate-x-2 translate-y-2 pointer-events-none" />
        </div>
        <div className="space-y-4 mb-12">
          <p className="font-sans text-gold text-xl md:text-3xl">
            December 31, 2024
          </p>
          <p className="font-sans text-white/80 max-w-2xl mx-auto">
            Join us as we celebrate our love and commitment in an evening of elegance and joy.
          </p>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 left-0 right-0 mx-auto  flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};
