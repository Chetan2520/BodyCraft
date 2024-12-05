import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CalorieCal = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState(""); // Accept height in cm
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the title
    gsap.from(".calorie-title", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".calorie-title",
        start: "top 80%",
      },
    });

    // Animate the input fields
    gsap.from(".calorie-input", {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".calorie-input",
        start: "top 80%",
      },
    });

    // Animate the calculate button
    gsap.from(".calorie-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".calorie-btn",
        start: "top 85%",
      },
    });

    // Animate the results
    gsap.from(".calorie-result", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".calorie-result",
        start: "top 90%",
      },
    });
  }, []);

  const calculateCalories = () => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters);

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Use height in cm
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Use height in cm
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

  return (
    <div className="min-h-screen font-font bg-black text-white flex flex-col items-center justify-center py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-8 calorie-title">
        2. Calculate Calorie
      </h2>

      <div className="w-full max-w-4xl space-y-6">
        <div className="flex justify-between space-x-4 calorie-input">
          <div className="flex-1">
            <label className="block text-sm font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-between space-x-4 calorie-input">
          <div className="flex-1">
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="calorie-input">
          <label className="block text-sm font-medium">Activity Level</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-4 mt-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="very active">Very Active</option>
          </select>
        </div>

        <div className="calorie-input">
          <label className="block text-sm font-medium">Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-4 mt-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Weight Gain</option>
            <option value="lose">Weight Loss</option>
          </select>
        </div>

        <button
          onClick={calculateCalories}
          className="w-full p-4 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 calorie-btn"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="w-full max-w-4xl mt-8 bg-gray-800 text-white p-6 rounded-lg calorie-result">
          <h3 className="text-2xl font-semibold text-center mb-4">Results</h3>
          <p className="text-lg">BMI: {result.bmi.toFixed(2)}</p>
          <p className="text-lg">Total Daily Calories: {Math.round(result.totalCalories)}</p>
          {goal === "gain" && (
            <p className="text-sm text-slate-400">
              For Weight Gain, you need to consume approximately{" "}
              {Math.round(result.adjustedCalories)} calories per day.
            </p>
          )}
          {goal === "lose" && (
            <p className="text-sm text-slate-400">
              For Weight Loss, you need to consume approximately{" "}
              {Math.round(result.adjustedCalories)} calories per day.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalorieCal;
