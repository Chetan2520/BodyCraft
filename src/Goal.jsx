import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRocket, FaArrowRight, FaWeight, FaHeart, FaStar, FaLightbulb, FaBullseye , FaDumbbell, FaRunning } from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp, GiMuscleFat, GiCardAceHearts } from "react-icons/gi";
import gsap from "gsap";
import weightGainImg from "./assets/weightgain.png";
import weightLossImg from "./assets/weight-loss.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
const Goal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from(".goal-hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".goal-hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    // Floating elements animation
    gsap.to(".floating-goal-element", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Goal cards animation
    gsap.from(".goal-card", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".goal-cards-section",
        start: "top 80%",
      },
    });

    // Stats animation
    gsap.from(".goal-stat-item", {
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".goal-stats-section",
        start: "top 85%",
      },
    });

    // Features animation
    gsap.from(".goal-feature-item", {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".goal-features-section",
        start: "top 80%",
      },
    });
  }, []);

  const features = [
    {
      icon: <FaBullseye  className="text-2xl text-purple-400" />,
      title: "Personalized Plans",
      description: "Custom workout and nutrition plans tailored to your specific goals"
    },
    {
      icon: <FaDumbbell className="text-2xl text-blue-400" />,
      title: "Expert Guidance",
      description: "Professional advice from fitness experts and nutritionists"
    },
    {
      icon: <FaHeart className="text-2xl text-green-400" />,
      title: "Health Focus",
      description: "Prioritize your health while achieving your fitness goals"
    },
    {
      icon: <FaStar className="text-2xl text-yellow-400" />,
      title: "Proven Results",
      description: "Thousands of success stories and proven methodologies"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-32 floating-goal-element">
        <GiMuscleUp className="text-7xl text-purple-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-goal-element">
        <GiWeightLiftingUp className="text-7xl text-blue-500/20" />
      </div>
      <div className="absolute top-1/3 right-20 floating-goal-element">
        <FaStar className="text-5xl text-yellow-500/20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="goal-hero-title text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="text-white">Fitness Journey</span>
          </h1>
          
          <p className="goal-hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your body and mind with personalized fitness plans designed specifically for your goals. 
            Whether you want to build strength or achieve a lean physique, we've got you covered.
          </p>

          {/* Quick Stats */}
          <div className="goal-stats-section grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="goal-stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
            <div className="goal-stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div className="goal-stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="goal-stat-item bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Cards Section */}
      <div className="goal-cards-section relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Weight Gain Card */}
            <div className="goal-card group">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl border border-green-500/20 p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-8 group-hover:scale-110 transition-transform duration-300">
                    <GiMuscleUp className="text-4xl text-white" />
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Weight Gain
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
                    Build muscle mass and strength with scientifically-proven methods. 
                    Our comprehensive approach combines nutrition, training, and recovery for optimal results.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Muscle building workouts</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>High-calorie meal plans</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Recovery optimization</span>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <button
                    onClick={() => navigate('/weightgain')}
                    className="group/btn bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 mx-auto"
                  >
                    <FaRocket className="group-hover/btn:translate-x-1 transition-transform" />
                    Start Gaining Weight
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Weight Loss Card */}
            <div className="goal-card group">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-blue-500/20 p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-8 group-hover:scale-110 transition-transform duration-300">
                    <GiMuscleFat className="text-4xl text-white" />
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Weight Loss
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
                    Achieve your ideal weight through sustainable methods. 
                    Our approach focuses on fat loss while preserving muscle mass and improving overall health.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Fat-burning workouts</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Balanced nutrition plans</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Lifestyle coaching</span>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <button
                    onClick={() => navigate('/weightloss')}
                    className="group/btn bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 mx-auto"
                  >
                    <FaRocket className="group-hover/btn:translate-x-1 transition-transform" />
                    Start Losing Weight
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="goal-features-section relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">BodyCraft</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach ensures you get the best results on your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="goal-feature-item group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-6">
              <FaLightbulb className="text-3xl text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have already achieved their fitness goals with BodyCraft. 
              Your transformation starts today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/weightgain')}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                Start Gaining Weight
              </button>
              <button
                onClick={() => navigate('/weightloss')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Start Losing Weight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
