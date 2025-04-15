import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import QRCode from 'react-qr-code';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  guests: z.number().min(0).max(5),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export const RSVP = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="rsvp" ref={ref} className="py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif font-semibold text-4xl md:text-5xl text-gold mb-4">RSVP</h2>
        <p className="text-white/80">Please respond by November 30, 2024</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full bg-charcoal/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold transition-colors duration-300"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full bg-charcoal/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold transition-colors duration-300"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="guests" className="block text-white mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              {...register('guests', { valueAsNumber: true })}
              min="0"
              max="5"
              className="w-full bg-charcoal/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold transition-colors duration-300"
            />
            {errors.guests && (
              <p className="text-red-400 text-sm mt-1">{errors.guests.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">Message (Optional)</label>
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              className="w-full bg-charcoal/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full font-semibold bg-gold hover:bg-gold/90 text-white py-4 px-8 rounded-full font-serif text-lg transition-colors duration-300"
          >
            Send RSVP
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-charcoal/50 p-8 rounded-lg backdrop-blur-sm text-center"
        >
          <h3 className="font-serif text-2xl text-gold mb-4">Scan to RSVP</h3>
          <div className="bg-white p-4 rounded-lg inline-block mb-4">
            <QRCode
              value="https://dreamwedding.com/rsvp"
              size={200}
              level="H"
            />
          </div>
          <p className="text-white/80">
            Or visit:<br />
            <a
              href="https://dreamwedding.com/rsvp"
              className="text-gold hover:text-gold/80 transition-colors duration-300"
            >
              dreamwedding.com/Sarah&Maman/rsvp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};