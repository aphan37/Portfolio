import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import SpaceBackground from '@/components/SpaceBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SpaceBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ContactForm />
      </div>
    </main>
  );
} 