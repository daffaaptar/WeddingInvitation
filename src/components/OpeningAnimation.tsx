import { motion } from 'framer-motion';
import { Heart, Flower } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

export const OpeningAnimation = ({ onComplete }: Props) => {
  const flowerVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 bg-navy z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={flowerVariants}
          initial="initial"
          animate="animate"
          className="absolute top-10 left-10 text-gold/20"
        >
          <Flower className="w-24 h-24" />
        </motion.div>
        <motion.div
          variants={flowerVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="absolute bottom-10 right-10 text-gold/20"
        >
          <Flower className="w-24 h-24" />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-4">
            Sarah & Maman
          </h1>
          <p className="font-sans text-white/80">Request the pleasure of your company</p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gold text-white font-serif text-2xl rounded-full flex items-center gap-2 mx-auto"
          onClick={onComplete}
        >
          <Heart className="w-6 h-6" />
          Open Invitation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};