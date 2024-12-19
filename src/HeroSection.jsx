import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from './Button';
import heroImg from './assets/hero-img.png'

const HeroSection = () => {
  useEffect(() => {
    // GSAP animation for elements
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-title',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, delay: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-button',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.hero-description',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <img
        className="w-full h-screen object-cover"
        src={heroImg}
        alt="Hero Image"
      />

      <div className="font-bold font-font text-white absolute inset-0 p-6 text-3xl flex flex-col justify-center gap-4 bg-opacity-70 bg-black h-screen w-full 
        sm:p-8 sm:text-4xl 
        md:flex md:justify-center md:items-center md:text-5xl 
        lg:text-6xl lg:p-12">
        <div className="hero-text text-red-500">
          Let's Transform Your Body with
        </div>
        <span className="hero-title text-3xl bg-gradient-to-b from-white via-purple-500 to-purple-900 bg-clip-text text-transparent 
          sm:text-4xl 
          md:text-5xl 
          lg:text-7xl">
          BodyCraft.
        </span>
        <p className="hero-description text-xs text-slate-300 bg-transparent font-medium 
          sm:text-sm 
          md:px-24 md:font-normal 
          lg:px-48 lg:text-base">
          At BodyCraft, we offer personalized calorie requirements, workouts, and guidance to help you gain or lose weight effectively. Start your fitness journey today!
        </p>
        <Button Button="Explore" className="hero-button" />
      </div>
    </section>
  );
};

export default HeroSection;
