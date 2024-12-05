import React, { useEffect } from "react";
import { FaWeight, FaCalculator, FaDumbbell, FaBed } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BMICalculator from "./BMICalculator";
import CalorieCal from "./CalorieCal";
import Exercise from "./Exercise";
import Rest from "./Rest";

const WeightGain = () => {
  const steps = [
    { icon: <FaWeight className="text-black text-3xl" />, step: "Check BMI", date: "Step 1" },
    { icon: <FaCalculator className="text-black text-3xl" />, step: "Calculate Calorie", date: "Step 2" },
    { icon: <FaDumbbell className="text-black text-3xl" />, step: "Workout", date: "Step 3" },
    { icon: <FaBed className="text-black text-3xl" />, step: "Rest", date: "Step 4" },
  ];

  // Smooth scroll to weight gain section on button click
  const scrollToSection = () => {
    const section = document.getElementById("weight-gain-section");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".step-container", {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".step-container",
        start: "top 80%",
      },
    });

    gsap.from(".header-animation", {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".header-animation",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto p-16 min-h-screen text-white font-font">
        <h1 className="text-4xl font-bold text-center mb-24 md:text-5xl header-animation">
          Start Journey
        </h1>
        <div id="weight-gain-section" className="relative border-l-4 border-purple-500 pl-12">
          {steps.map((item, index) => (
            <div key={index} className="mb-12 flex items-center step-container">
              {/* Icon */}
              <div className="absolute -left-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
                {item.icon}
              </div>
              {/* Step Details */}
              <div className="bg-[#141314] p-6 rounded-lg shadow-lg w-full hover:translate-x-10 transition-transform md:w-1/2">
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold">{item.step}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Components */}
      <BMICalculator />
      <CalorieCal />
      <Exercise />
      <Rest />
    </>
  );
};

export default WeightGain;
