import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gift, CreditCard, Wallet } from 'lucide-react';

export const Gifts = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const giftOptions = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Wedding Registry",
      description: "Browse our curated wishlist",
      link: "https://registry.example.com",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Bank Transfer",
      description: "For those who prefer direct contributions",
      details: "Account: 1234-5678-9012 | Bank: Example Bank",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Digital Gift",
      description: "Send a digital gift card",
      link: "https://gifts.example.com",
    },
  ];

  return (
    <section id="gifts" ref={ref} className="py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif font-semibold text-4xl md:text-5xl text-gold mb-4">Wedding Gifts</h2>
        <p className="text-white/80">Your presence is our present, but if you wish to give a gift...</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {giftOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-charcoal/50 p-8 rounded-lg backdrop-blur-sm text-center"
          >
            <div className="text-gold mb-4">{option.icon}</div>
            <h3 className="font-serif text-2xl text-gold mb-2">{option.title}</h3>
            <p className="text-white/80 mb-4">{option.description}</p>
            {option.link ? (
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold/90 text-white py-2 px-6 rounded-full font-serif transition-colors duration-300"
              >
                View Details
              </a>
            ) : (
              <p className="text-white/60 text-sm">{option.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};