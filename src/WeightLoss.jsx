import React, { useEffect } from "react";
import { FaWeight, FaCalculator, FaDumbbell, FaBed, FaArrowRight, FaRocket } from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BMICalculator from "./BMICalculator";
import CalorieCal from "./CalorieCal";
import Exercise from "./Exercise";
import Rest from "./Rest";

const WeightLoss = () => {
  const steps = [
    { 
      icon: <FaWeight className="text-white text-2xl" />, 
      step: "Check BMI", 
      date: "Step 1",
      description: "Determine your current body mass index to set realistic weight loss goals",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <FaCalculator className="text-white text-2xl" />, 
      step: "Calculate Calorie", 
      date: "Step 2",
      description: "Calculate your daily calorie deficit for healthy and sustainable weight loss",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <FaDumbbell className="text-white text-2xl" />, 
      step: "Workout", 
      date: "Step 3",
      description: "Follow a cardio and strength training plan to burn calories and build lean muscle",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: <FaBed className="text-white text-2xl" />, 
      step: "Rest", 
      date: "Step 4",
      description: "Allow your body to recover and maintain a healthy metabolism",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  // Smooth scroll to weight loss section on button click
  const scrollToSection = () => {
    const section = document.getElementById("weight-loss-section");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(".hero-stats", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.6,
      ease: "power3.out",
    });

    // Steps animation - modified to prevent scroll interference
    gsap.from(".step-card", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".steps-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        preventOverlaps: true,
        fastScrollEnd: true
      },
    });

    // Floating elements animation
    gsap.to(".floating-icon", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Gradient text animation
    gsap.to(".gradient-text", {
      backgroundPosition: "200% center",
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Cleanup function to prevent memory leaks and scroll interference
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-32 floating-icon">
          <GiMuscleUp className="text-6xl text-green-500/30" />
        </div>
        <div className="absolute bottom-32 right-32 floating-icon">
          <GiWeightLiftingUp className="text-6xl text-emerald-500/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-8">
            <span className="gradient-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent bg-[length:200%_auto]">
              Transform
            </span>
            <br />
            <span className="text-white">Your Life</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Embark on a journey to lose weight, build confidence, and achieve the healthy lifestyle you've always wanted
          </p>

          <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">4</div>
              <div className="text-gray-300">Simple Steps</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">8</div>
              <div className="text-gray-300">Weeks Program</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          <button 
            onClick={scrollToSection}
            className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 mx-auto"
          >
            <FaRocket className="group-hover:translate-x-1 transition-transform" />
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Steps Section */}
      <div id="weight-loss-section" className="steps-section relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your <span className="gradient-text bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow these proven steps to achieve sustainable weight loss and improved health
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="step-card group">
                <div className={`bg-gradient-to-br ${item.gradient} p-1 rounded-2xl hover:scale-105 transition-all duration-500`}>
                  <div className="bg-black rounded-2xl p-8 h-full">
                    <div className="flex items-start gap-6">
                      <div className={`bg-gradient-to-br ${item.gradient} p-4 rounded-xl flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-medium text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                            {item.date}
                          </span>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{item.step}</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition-colors">
                          <span>Learn More</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Components with enhanced styling */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <BMICalculator />
        <CalorieCal />
        <Exercise />
        <Rest />
      </div>
    </div>
  );
};

export default WeightLoss;
