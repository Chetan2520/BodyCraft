// File: BMICalculator.jsx
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animating the header
    gsap.from(".bmi-header", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bmi-header",
        start: "top 80%",
      },
    });

    // Animating the form fields
    gsap.from(".bmi-form", {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bmi-form",
        start: "top 80%",
      },
    });

    // Animating the BMI result
    gsap.from(".bmi-result", {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".bmi-result",
        start: "top 85%",
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
    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus("Normal");
    else setStatus("Overweight");
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setStatus("");
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 p-4 md:p-16">
      <h1 className="text-4xl font-font text-white font-semibold text-center bmi-header">
        1. Check BMI
      </h1>
      <div className="px-8 py-4 font-font bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-lg bg-[#141314] rounded-xl shadow-xl p-10 bmi-form">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Enter your weight"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Enter your height"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={calculateBMI}
                className="w-full text-xs p-2 md:p-4 bg-purple-600 rounded-lg text-white font-normal hover:bg-purple-700 transition"
              >
                Calculate BMI
              </button>
              <button
                onClick={resetCalculator}
                className="w-full p-2 md:p-4 text-xs bg-gray-600 rounded-lg text-white font-normal hover:bg-gray-700 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* BMI Result Section */}
          {bmi && (
            <div className="mt-8 text-center bmi-result">
              <h2 className="text-3xl font-semibold text-purple-400">
                Your BMI: {bmi}
              </h2>
              <p
                className={`text-lg font-normal mt-2 ${
                  status === "Underweight"
                    ? "text-yellow-400"
                    : status === "Normal"
                    ? "text-green-400"
                    : "text-orange-400"
                }`}
              >
                Status: {status}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
