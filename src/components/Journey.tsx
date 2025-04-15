import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

const timelineEvents = [
  {
    date: 'June 2020',
    title: 'First Meeting',
    description: 'A chance encounter at a local coffee shop sparked our story.',
    image: 'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?auto=format&fit=crop&w=800&q=80'
  },
  {
    date: 'December 2021',
    title: 'First Date',
    description: 'An unforgettable evening at the city botanical gardens.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80'
  },
  {
    date: 'March 2023',
    title: 'The Proposal',
    description: 'Under a starlit sky, Michael asked the question that would change everything.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80'
  }
];

export const Journey = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="journey" ref={ref} className="py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-bold font-serif text-4xl md:text-5xl text-gold mb-4">Our Journey</h2>
        <p className="font-sans text-white/80">The story of how our love blossomed</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-[1px] top-0 bottom-0 w-[2px] bg-gold/20" />
        
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.date}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center gap-8 mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-1/2 text-center">
              <div className="relative inline-block">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full max-w-md rounded-lg shadow-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 border-2 border-gold rounded-lg transform md:translate-x-4 translate-x-2 translate-y-2 md:translate-y-4 pointer-events-none" />
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gold" />
            </div>

            <div className={`w-1/2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <h4 className="font-serif text-xl text-gold mb-2">{event.date}</h4>
              <h1 className="font-sans text-xl md:text-2xl mb-2">{event.title}</h1>
              <p className="font-sans text-sm md:text-base text-white/80">{event.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-gold/20"
        >
          <Heart className="w-12 h-12" />
        </motion.div>
      </div>
    </section>
  );
};