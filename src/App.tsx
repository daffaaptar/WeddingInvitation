import React, { useState } from 'react';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Journey } from './components/Journey';
import { Location } from './components/Location';
import { Countdown } from './components/Countdown';
import { RSVP } from './components/RSVP';
import { PhotoGallery } from './components/Gallery';
import { Gifts } from './components/Gifts';
import { ThankYou } from './components/ThankYou';

function App() {
  const [showOpening, setShowOpening] = useState(true);

  return (
    <div className="bg-navy min-h-screen">
      {showOpening && <OpeningAnimation onComplete={() => setShowOpening(false)} />}
      <Navbar />
      <Hero />
      <main className="max-w-content mx-auto px-4 py-section space-y-section">
        <section id="couple" className="space-y-section">
          <Profile
            name="Maman Anderson"
            image="https://images.unsplash.com/photo-1632635604193-e46310cd411b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget interdum ex"
          role='The Groom'
          />
          <Profile
            name="Sarah Mitchell"
            image="https://plus.unsplash.com/premium_photo-1675106697461-c9e7c65a2b14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget interdum ex"
            isReversed
            role='The Bride'
          />
        </section>
        <Journey />
        <Location />
        <Countdown />
        <RSVP />
        <PhotoGallery />
        <Gifts />
        <ThankYou />
      </main>
    </div>
  );
}

export default App;