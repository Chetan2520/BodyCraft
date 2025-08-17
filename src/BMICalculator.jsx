// File: BMICalculator.jsx
import React, { useState, useEffect } from "react";
import { FaCalculator, FaWeight, FaRuler, FaChartLine, FaLightbulb } from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from(".bmi-hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".bmi-hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    // Floating icons animation
    gsap.to(".floating-bmi-icon", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Form animations
    gsap.from(".bmi-form-container", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bmi-form-container",
        start: "top 80%",
      },
    });

    // Input field animations
    gsap.from(".bmi-input-field", {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bmi-input-field",
        start: "top 85%",
      },
    });

    // Button animations
    gsap.from(".bmi-action-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".bmi-action-btn",
        start: "top 90%",
      },
    });

    // Result animation
    gsap.from(".bmi-result-display", {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".bmi-result-display",
        start: "top 95%",
      },
    });
  }, []);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);
      updateStatus(bmiValue);
    }
  };

  const updateStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus("Underweight");
      setStatusColor("from-yellow-400 to-orange-500");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus("Normal");
      setStatusColor("from-green-400 to-emerald-500");
    } else {
      setStatus("Overweight");
      setStatusColor("from-orange-400 to-red-500");
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setStatus("");
    setStatusColor("");
  };

  const getBMITips = () => {
    if (status === "Underweight") {
      return "Focus on nutrient-dense foods and strength training to build healthy weight.";
    } else if (status === "Normal") {
      return "Maintain your healthy lifestyle with balanced nutrition and regular exercise.";
    } else {
      return "Consider a balanced diet and regular cardio exercise for healthy weight management.";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 floating-bmi-icon">
        <GiMuscleUp className="text-7xl text-purple-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-bmi-icon">
        <GiWeightLiftingUp className="text-7xl text-pink-500/20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="bmi-hero-title text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              BMI Calculator
            </span>
          </h1>
          <p className="bmi-hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover your Body Mass Index and get personalized insights for your fitness journey
          </p>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="bmi-form-container relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
                <FaCalculator className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your BMI</h2>
              <p className="text-gray-400">Enter your measurements to get started</p>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bmi-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaWeight className="text-purple-400" />
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your weight"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="bmi-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaRuler className="text-pink-400" />
                  Height (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your height"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={calculateBMI}
                className="bmi-action-btn flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-3"
              >
                <FaCalculator className="text-xl" />
                Calculate BMI
              </button>
              <button
                onClick={resetCalculator}
                className="bmi-action-btn flex-1 bg-white/5 hover:bg-white/10 text-white py-4 px-8 rounded-xl font-semibold text-lg border border-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaChartLine className="text-xl" />
                Reset
              </button>
            </div>

            {/* BMI Result Display */}
            {bmi && (
              <div className="bmi-result-display">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-300 mb-2">Your BMI Result</h3>
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                      {bmi}
                    </div>
                    <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${statusColor} text-white font-semibold text-lg`}>
                      {status}
                    </div>
                  </div>
                  
                  {/* BMI Tips */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <FaLightbulb className="text-yellow-400 text-xl" />
                      <span className="text-lg font-semibold text-gray-200">Personalized Tip</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{getBMITips()}</p>
                  </div>

                  {/* BMI Scale */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">BMI Categories</h4>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="bg-yellow-500/20 text-yellow-300 px-3 py-2 rounded-lg border border-yellow-500/30">
                        Underweight: &lt;18.5
                      </div>
                      <div className="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg border border-green-500/30">
                        Normal: 18.5-24.9
                      </div>
                      <div className="bg-orange-500/20 text-orange-300 px-3 py-2 rounded-lg border border-orange-500/30">
                        Overweight: &gt;25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
