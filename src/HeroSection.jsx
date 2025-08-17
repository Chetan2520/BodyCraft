import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from './Button';

const HeroSection = () => {
  useEffect(() => {
    // Simple fade-in animations
    gsap.fromTo('.hero-content', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    
    gsap.fromTo('.hero-image', 
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    // Subtle floating animation for the image
    gsap.to('.hero-image', {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="hero-content space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
              💪 Fitness • 🥗 Nutrition • 🧘 Wellness
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
              Transform your body,
              <span className="block font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                transform your life
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Personalized fitness plans backed by science. Achieve your goals with custom nutrition and workout routines designed just for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                Button="Start Free Trial" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl" 
              />
              <Button 
                Button="Learn More" 
                className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-medium rounded-lg transition-all duration-300" 
              />
            </div>

            {/* Simple Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-semibold text-white">50K+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="hero-image relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main fitness image from online */}
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Health and Wellness - Comprehensive Fitness and Nutrition"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
              
              {/* Fitness equipment overlay */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🏋️</span>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">+15</div>
                  <div className="text-xs">Muscle Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </section>
  );
};

export default HeroSection;
