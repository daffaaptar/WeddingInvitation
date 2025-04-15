import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Location = () => {
  const handleAddToCalendar = () => {
    const event = {
      text: "Sarah & Michael's Wedding",
      dates: "20241231T180000/20250101T000000",
      location: "Grand Plaza Hotel, 123 Luxury Avenue, New York, NY 10001",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${event.dates}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="location" className="py-section bg-navy text-white">
      <div className="text-center mb-12">
        <h2 className="font-serif font-semibold text-4xl md:text-5xl text-gold mb-4">Venue & Details</h2>
        <p className="text-white/80">Join us for our special day</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="bg-charcoal/50 p-8 rounded-lg backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-gold w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">Grand Plaza Hotel</h3>
                <p className="text-white/80">123 Luxury Avenue</p>
                <p className="text-white/80">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Calendar className="text-gold w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">December 31, 2024</h3>
                <p className="text-white/80">New Year's Eve</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-2xl text-gold mb-2">6:00 PM</h3>
                <p className="text-white/80">Cocktail Hour Begins</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCalendar}
            className="font-serif font-bold w-full bg-gold hover:bg-gold/90 text-white py-4 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Add to Calendar
          </button>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
          title="Wedding Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps?q=Grand+Plaza+Hotel+New+York&output=embed"
          allowFullScreen={true}  
          loading="lazy"
        />
        </div>
      </div>
    </section>
  );
};
