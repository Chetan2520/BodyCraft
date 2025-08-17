import React, { useEffect } from 'react';
import { FaBed, FaMoon, FaHeart, FaBrain, FaBatteryFull, FaLeaf, FaStar, FaLightbulb } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp, GiBed } from 'react-icons/gi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Rest = () => {
  const restBenefits = [
    {
      icon: <FaHeart className="text-3xl text-red-400" />,
      title: "Muscle Recovery",
      description: "During sleep, your body repairs the tiny muscle tears caused by exercise, promoting muscle growth and strength.",
      gradient: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: <FaBrain className="text-3xl text-blue-400" />,
      title: "Growth Hormone Release",
      description: "Sleep triggers the release of growth hormone, essential for muscle recovery and fat loss.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <FaBatteryFull className="text-3xl text-green-400" />,
      title: "Energy Restoration",
      description: "Proper rest replenishes energy reserves, helping you feel energized and ready for your next workout.",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <FaLeaf className="text-3xl text-emerald-400" />,
      title: "Prevents Overtraining",
      description: "Adequate sleep prevents burnout and overtraining, ensuring consistent peak performance.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      icon: <FaStar className="text-3xl text-yellow-400" />,
      title: "Mental Clarity",
      description: "Quality sleep improves mental focus and motivation, keeping you sharp and motivated for the day ahead.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  const sleepTips = [
    "Maintain a consistent sleep schedule, even on weekends",
    "Create a relaxing bedtime routine",
    "Keep your bedroom cool, dark, and quiet",
    "Avoid screens 1 hour before bedtime",
    "Exercise regularly, but not too close to bedtime",
    "Limit caffeine and alcohol intake",
    "Use your bed only for sleep and intimacy"
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from(".rest-hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".rest-hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    // Floating icons animation
    gsap.to(".floating-rest-icon", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Benefits cards animation
    gsap.from(".rest-benefit-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rest-benefits-section",
        start: "top 80%",
      },
    });

    // Image animation
    gsap.from(".rest-hero-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rest-hero-image",
        start: "top 85%",
      },
    });

    // Tips animation
    gsap.from(".rest-tip-item", {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rest-tips-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-orange-500/3 to-yellow-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 floating-rest-icon">
        <GiBed className="text-7xl text-orange-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-rest-icon">
        <GiMuscleUp className="text-7xl text-yellow-500/20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="rest-hero-title text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent">
                  Rest & Recovery
                </span>
              </h1>
              <p className="rest-hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                The foundation of every successful fitness journey. Quality rest is not just about sleep—it's about giving your body the time it needs to rebuild, recover, and become stronger.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-orange-400 mb-1">7-9</div>
                  <div className="text-sm text-gray-300">Hours Sleep</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">48-72</div>
                  <div className="text-sm text-gray-300">Hours Rest</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Recovery</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="rest-hero-image">
              <div className="relative">
                <img
                  src="https://media.istockphoto.com/id/1351440122/photo/asleep-young-arab-man-sleeping-resting-peacefully-in-comfortable-bed-lying-with-closed-eyes.webp?a=1&b=1&s=612x612&w=0&k=20&c=NQxvrrKIMv0J-bzrmN6lWsBJOtkmP34-GboHGgQUmdw="
                  alt="Restful Sleep"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-orange-500 to-yellow-500 p-3 rounded-full">
                  <FaMoon className="text-white text-xl" />
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full">
                  <FaBed className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="rest-benefits-section relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Rest Matters</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the science behind rest and recovery helps you optimize your fitness results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restBenefits.map((benefit, index) => (
              <div key={index} className="rest-benefit-card group">
                <div className={`bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl rounded-2xl border ${benefit.borderColor} p-8 h-full transform hover:scale-105 transition-all duration-500 hover:shadow-2xl`}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sleep Tips Section */}
      <div className="rest-tips-section relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mb-6">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Sleep Optimization Tips</h3>
              <p className="text-gray-400">Follow these proven strategies to improve your sleep quality and recovery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sleepTips.map((tip, index) => (
                <div key={index} className="rest-tip-item flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 border border-orange-500/30">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Recovery?</h4>
                <p className="text-gray-300 mb-6">
                  Start implementing these rest strategies today and experience the difference in your fitness performance
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                  Start Your Recovery Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;
