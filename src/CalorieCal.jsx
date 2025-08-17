import React, { useState, useEffect } from "react";
import { FaCalculator, FaWeight, FaRuler, FaBirthdayCake, FaVenusMars, FaRunning, FaCrosshairs, FaFire, FaChartLine, FaLightbulb } from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CalorieCal = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from(".calorie-hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".calorie-hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    // Floating icons animation
    gsap.to(".floating-calorie-icon", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Form animations
    gsap.from(".calorie-form-container", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".calorie-form-container",
        start: "top 80%",
      },
    });

    // Input field animations
    gsap.from(".calorie-input-field", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".calorie-input-field",
        start: "top 85%",
      },
    });

    // Button animations
    gsap.from(".calorie-calculate-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".calorie-calculate-btn",
        start: "top 90%",
      },
    });

    // Result animation
    gsap.from(".calorie-result-display", {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".calorie-result-display",
        start: "top 95%",
      },
    });
  }, []);

  const calculateCalories = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calorieMultiplier;
    switch (activityLevel) {
      case "sedentary":
        calorieMultiplier = 1.2;
        break;
      case "light":
        calorieMultiplier = 1.375;
        break;
      case "moderate":
        calorieMultiplier = 1.55;
        break;
      case "active":
        calorieMultiplier = 1.725;
        break;
      case "very active":
        calorieMultiplier = 1.9;
        break;
      default:
        calorieMultiplier = 1.2;
        break;
    }

    const totalCalories = bmr * calorieMultiplier;

    let adjustedCalories;
    if (goal === "gain") {
      adjustedCalories = totalCalories + 500;
    } else if (goal === "lose") {
      adjustedCalories = totalCalories - 500;
    } else {
      adjustedCalories = totalCalories;
    }

    setResult({ bmi, totalCalories, adjustedCalories });
  };

  const getActivityDescription = (level) => {
    const descriptions = {
      sedentary: "Little to no exercise",
      light: "Light exercise 1-3 days/week",
      moderate: "Moderate exercise 3-5 days/week",
      active: "Hard exercise 6-7 days/week",
      "very active": "Very hard exercise, physical job"
    };
    return descriptions[level] || "";
  };

  const getGoalDescription = (goalType) => {
    const descriptions = {
      maintain: "Keep your current weight",
      gain: "Build muscle and gain weight",
      lose: "Lose fat and get leaner"
    };
    return descriptions[goalType] || "";
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 floating-calorie-icon">
        <GiMuscleUp className="text-7xl text-blue-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-calorie-icon">
        <GiWeightLiftingUp className="text-7xl text-cyan-500/20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="calorie-hero-title text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Calorie Calculator
            </span>
          </h1>
          <p className="calorie-hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate your daily calorie needs and get personalized recommendations for your fitness goals
          </p>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="calorie-form-container relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6">
                <FaCalculator className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Daily Calories</h2>
              <p className="text-gray-400">Enter your details to get personalized calorie recommendations</p>
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="calorie-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaWeight className="text-blue-400" />
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your weight"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="calorie-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaRuler className="text-cyan-400" />
                  Height (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your height"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="calorie-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaBirthdayCake className="text-blue-400" />
                  Age
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your age"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="calorie-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaVenusMars className="text-cyan-400" />
                  Gender
                </label>
                <div className="relative">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Activity Level and Goal Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="calorie-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaRunning className="text-blue-400" />
                  Activity Level
                </label>
                <div className="relative">
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                    <option value="very active">Very Active</option>
                  </select>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{getActivityDescription(activityLevel)}</p>
              </div>

              <div className="calorie-input-field">
                <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                  <FaCrosshairs className="text-cyan-400" />
                  Goal
                </label>
                <div className="relative">
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="maintain">Maintain Weight</option>
                    <option value="gain">Weight Gain</option>
                    <option value="lose">Weight Loss</option>
                  </select>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{getGoalDescription(goal)}</p>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center mb-12">
              <button
                onClick={calculateCalories}
                className="calorie-calculate-btn bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-12 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 mx-auto"
              >
                <FaFire className="text-2xl" />
                Calculate Calories
              </button>
            </div>

            {/* Results Display */}
            {result && (
              <div className="calorie-result-display">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-200 mb-2">Your Calorie Results</h3>
                    <p className="text-gray-400">Personalized recommendations for your fitness journey</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{result.bmi.toFixed(1)}</div>
                      <div className="text-gray-300">BMI</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 border border-cyan-500/30 text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{Math.round(result.totalCalories)}</div>
                      <div className="text-gray-300">Maintenance Calories</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{Math.round(result.adjustedCalories)}</div>
                      <div className="text-gray-300">Target Calories</div>
                    </div>
                  </div>

                  {/* Goal-specific recommendations */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <FaLightbulb className="text-yellow-400 text-xl" />
                      <span className="text-lg font-semibold text-gray-200">Personalized Recommendation</span>
                    </div>
                    {goal === "gain" && (
                      <p className="text-gray-300 text-center leading-relaxed">
                        For healthy weight gain, consume approximately <span className="text-green-400 font-semibold">{Math.round(result.adjustedCalories)} calories</span> per day. 
                        Focus on protein-rich foods and strength training to build muscle mass.
                      </p>
                    )}
                    {goal === "lose" && (
                      <p className="text-gray-300 text-center leading-relaxed">
                        For sustainable weight loss, consume approximately <span className="text-green-400 font-semibold">{Math.round(result.adjustedCalories)} calories</span> per day. 
                        Combine with regular cardio and strength training for best results.
                      </p>
                    )}
                    {goal === "maintain" && (
                      <p className="text-gray-300 text-center leading-relaxed">
                        To maintain your current weight, consume approximately <span className="text-green-400 font-semibold">{Math.round(result.adjustedCalories)} calories</span> per day. 
                        Keep up your current activity level for optimal health.
                      </p>
                    )}
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

export default CalorieCal;
