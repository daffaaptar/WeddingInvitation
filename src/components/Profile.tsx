import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProfileProps {
  name: string;
  image: string;
  description: string;
  role:string;
  isReversed?: boolean;
}

export const Profile = ({ name, image, description, role,  isReversed = false }: ProfileProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full aspect-[3/4] max-w-xs md:max-w-sm object-cover rounded-xl shadow-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 border-2 border-gold rounded-xl translate-x-2 translate-y-2 pointer-events-none" />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left px-6  md:px-12">
        <p className="text-white/80 font-sans text-sm py-2 leading-relaxed">{role}</p>
        <h2 className="font-semibold font-serif text-3xl md:text-4xl text-gold mb-4">{name}</h2>
        <p className="text-white/80 font-sans leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
