import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WhyChoose = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header text
    gsap.from('.whyChoose-text h1', {
      opacity: 0,
      y: -50,
      duration: 2, // Smooth and slow duration
      ease: 'power2.out', // Smooth easing
      delay: 0.3, // Initial delay
      scrollTrigger: {
        trigger: '.whyChoose-text',
        start: 'top 85%',
      },
    });

    gsap.from('.whyChoose-text p', {
      opacity: 0,
      y: 30,
      duration: 2,
      delay: 0.5, // Increased delay for the paragraph
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.whyChoose-text',
        start: 'top 85%',
      },
    });

    // Animate cards with stagger effect
    gsap.from('.card', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.2, // Start after a slight delay
      stagger: 0.3, // Delay between each card animation
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.card-section',
        start: 'top 85%',
      },
    });

    // Animate the main image
    gsap.from('.img-long', {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.image-section',
        start: 'top 85%',
      },
    });

    // Animate small images with stagger
    gsap.from('.img-small img', {
      opacity: 0,
      scale: 0.8,
      duration: 2,
      stagger: 0.3, // Delay between animations of small images
      delay: 0.5, // Start a bit later
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.image-section',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <div className="container flex flex-col gap-12 font-font text-white px-8 py-8">
      <div className="whyChoose-text flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold md:text-5xl">Why Choose BodyCraft ?</h1>
        <p className="text-sm text-slate-300 md:text-xl">
          It is long established fact that a reader will be by readable. It is long established fact that a reader will be by readable.
        </p>
      </div>

      <div className="whyChoose-card flex flex-col gap-16 md:flex-row-reverse md:p-10">
        <div className="image-section flex flex-col gap-4 md:flex-row-reverse">
          <div className="img-long h-50 rounded-2xl overflow-hidden md:h-[21rem]">
            <img className="md:h-[21rem] md:w-60 md:object-cover" src="./src/assets/Card-2.jpg" alt="Main" />
          </div>
          <div className="img-small flex gap-4 md:flex-col">
            <div className="img1">
              <img className="h-40 w-30 object-cover rounded-2xl" src="./src/assets/Card-1.jpg" alt="Small 1" />
            </div>
            <div className="img2">
              <img className="h-40 w-30 object-cover rounded-2xl" src="./src/assets/Card-3.jpg" alt="Small 2" />
            </div>
          </div>
        </div>

        <div className="card-section flex flex-col gap-16 md:flex-row md:flex-wrap md:w-[60%]">
          <div className="card bg-[#141314] flex flex-col gap-2 py-6 px-3 rounded-xl md:w-80">
            <div className="flex items-center gap-4">
              <i className="h-14 text-black w-14 rounded-full flex items-center justify-center bg-purple-700 text-3xl fa-solid fa-user-cog"></i>
              <h3 className="font-medium text-xl">Personalized Plans</h3>
            </div>
            <p className="text-xs text-slate-300">
              We understand that every individual or business has unique needs. That’s why we craft customized strategies tailored specifically for your goals, ensuring maximum effectiveness and satisfaction.
            </p>
          </div>

          <div className="card bg-[#141314] flex flex-col gap-2 py-6 px-3 rounded-xl md:w-80">
            <div className="flex items-center gap-4">
              <i className="h-14 text-black w-14 rounded-full flex items-center justify-center bg-purple-700 text-3xl fa-solid fa-chart-line"></i>
              <h3 className="font-medium text-xl">Proven Track Record</h3>
            </div>
            <p className="text-xs text-slate-300">
              Our history speaks for itself. With countless successful projects and happy clients, we’ve consistently delivered quality results that build trust and credibility.
            </p>
          </div>

          <div className="card bg-[#141314] flex flex-col gap-2 py-6 px-3 rounded-xl md:w-80">
            <div className="flex items-center gap-4">
              <i className="h-14 text-black w-14 rounded-full flex items-center justify-center bg-purple-700 text-3xl fa-solid fa-wrench"></i>
              <h3 className="font-medium text-xl">Cutting-Edge Tools</h3>
            </div>
            <p className="text-xs text-slate-300">
              We utilize the latest and most accurate tools to provide innovative and efficient solutions, ensuring precision in every step of the process.
            </p>
          </div>

          <div className="card bg-[#141314] flex flex-col gap-2 py-6 px-3 rounded-xl md:w-80">
            <div className="flex items-center gap-4">
              <i className="h-14 text-black w-14 rounded-full flex items-center justify-center bg-purple-700 text-3xl fa-solid fa-medal"></i>
              <h3 className="font-medium text-xl">Unmatched Expertise</h3>
            </div>
            <p className="text-xs text-slate-300">
              Our team comprises industry-leading professionals equipped with in-depth knowledge and skills to tackle challenges and deliver exceptional outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;