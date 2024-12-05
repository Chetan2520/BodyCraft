import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate text sections
    gsap.from('.about-text h1', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 85%',
      },
    });

    gsap.from('.about-text p', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.3, // Adds slight delay for paragraph animation
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 85%',
      },
    });

    // Animate cards (left text)
    gsap.from('.about-img-text .text:first-child', {
      opacity: 0,
      x: -50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-img-text',
        start: 'top 85%',
      },
    });

    // Animate image
    gsap.from('.about-img', {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-img',
        start: 'top 85%',
      },
    });

    // Animate cards (right text)
    gsap.from('.about-img-text .text:last-child', {
      opacity: 0,
      x: 50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-img-text',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <div
      id="about"
      className="container about bg-center bg-cover bg-no-repeat text-white font-font p-12"
    >
      <div className="about-text flex flex-col gap-4 h-90 mb-4 md:items-center md:justify-center md:p-10 md:text-xl ">
        <h1 className="text-4xl font-bold md:text-5xl">About BodyCraft</h1>
        <p className="text-sm text-slate-300 md:text-xl">
          BodyCraft helps you achieve your weight gain or weight loss goals with personalized tools and expert guidance, making your fitness journey easier and more effective.
        </p>
      </div>

      <div className="about-img-text flex flex-col gap-8 md:p-10 md:flex-row md:justify-between">
        <div className="text flex flex-col gap-4 justify-around md:w-80">
          <p className="text-xs p-4 rounded-2xl md:text-sm">
            BodyCraft offers a TDEE calculator, custom workout plans, and health tips tailored to your needs, ensuring you reach your fitness goals with accuracy and efficiency.
          </p>
          <p className="text-xs p-4 rounded-2xl md:text-sm">
            BodyCraft is for anyone aiming to improve their health, whether gaining weight, losing fat, or enhancing fitness, with personalized plans for all body types and fitness levels.
          </p>
        </div>
        <div className="object-cover md:h-90">
          <img className="about-img" src="./src/assets/about.jpg" alt="About" />
        </div>
        <div className="text flex flex-col gap-4 justify-around md:w-80">
          <p className="text-xs p-4 rounded-2xl md:text-sm">
            Created by individuals who understand the challenges of weight management, BodyCraft offers personalized solutions to guide you toward a healthier, more balanced lifestyle.
          </p>
          <p className="text-xs p-4 rounded-2xl md:text-sm">
            Join BodyCraft to access continuous support, motivation, and resources. You’ll be part of a community dedicated to achieving fitness goals and staying on track for long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
