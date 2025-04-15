import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const weddingDate = new Date('2024-12-31T18:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      
      setTimeLeft({
        days: differenceInDays(weddingDate, now),
        hours: differenceInHours(weddingDate, now) % 24,
        minutes: differenceInMinutes(weddingDate, now) % 60,
        seconds: differenceInSeconds(weddingDate, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section ref={ref} className="py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif font-semibold text-4xl md:text-5xl text-gold mb-4">Counting Down</h2>
        <p className="text-white/80">Until we say "I do"</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-charcoal/50 p-6 rounded-lg backdrop-blur-sm text-center"
          >
            <div className="font-sans text-4xl md:text-6xl text-gold mb-2">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-white/80 text-sm md:text-base">{unit.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};