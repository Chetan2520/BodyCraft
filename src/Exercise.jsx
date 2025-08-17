import React, { useState, useEffect } from 'react';
import { FaDumbbell, FaRunning, FaHeart, FaFire, FaCrosshairs, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp, GiMuscleFat, GiCardAceHearts } from 'react-icons/gi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ExerciseApp = () => {
  const [goal, setGoal] = useState('maintain');
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Weight gain exercises
  const gainExercises = [
    { 
      name: "Deadlift", 
      image: "https://img.freepik.com/free-photo/muscular-build-man-making-effort-while-weightlifting-cross-training-gym_637285-2488.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", 
      description: "Deadlifts target multiple muscles, especially the hamstrings, glutes, and lower back. It's great for building overall strength and muscle mass.",
      difficulty: "Advanced",
      muscleGroups: ["Hamstrings", "Glutes", "Lower Back"],
      sets: "3-5 sets",
      reps: "5-8 reps"
    },
    { 
      name: "Squats", 
      image: "https://img.freepik.com/free-photo/sporty-woman-doing-squats-muscular-fitness-woman-military-sportswear-isolated-white-wall-fitness-healthy-lifestyle-concept_231208-10499.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", 
      description: "Squats are essential for building lower body strength, improving posture, and increasing muscle mass in the thighs and glutes.",
      difficulty: "Intermediate",
      muscleGroups: ["Quadriceps", "Glutes", "Core"],
      sets: "3-4 sets",
      reps: "8-12 reps"
    },
    { 
      name: "Bench Press", 
      image: "https://media.istockphoto.com/id/180200014/photo/a-man-lifting-weights-on-a-bench-press.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdPRVKvyzkm0jm_433_2X9gmUBw4LoKiYkBF0UepMaA=", 
      description: "The bench press works the chest, shoulders, and triceps. It's a fundamental exercise for building upper body strength.",
      difficulty: "Intermediate",
      muscleGroups: ["Chest", "Shoulders", "Triceps"],
      sets: "3-4 sets",
      reps: "6-10 reps"
    },
    { 
      name: "Pull-Ups", 
      image: "https://media.istockphoto.com/id/480174782/photo/pull-ups.webp?a=1&b=1&s=612x612&w=0&k=20&c=BBgkdtKLuXThQiXCmFn8NlfpwTiQAJDCZVfRHSSKJgc=", 
      description: "Pull-ups target the back, biceps, and shoulders. They're a great bodyweight exercise for building upper body strength.",
      difficulty: "Advanced",
      muscleGroups: ["Back", "Biceps", "Shoulders"],
      sets: "3-4 sets",
      reps: "5-10 reps"
    },
    { 
      name: "Overhead Press", 
      image: "https://images.unsplash.com/photo-1682531023987-8e711baa95f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3ZlcmhlYWQlMjBQcmVzc3xlbnwwfHwwfHx8MA%3D%3D", 
      description: "The overhead press strengthens the shoulders, triceps, and upper chest. It's key for building upper body mass.",
      difficulty: "Intermediate",
      muscleGroups: ["Shoulders", "Triceps", "Upper Chest"],
      sets: "3-4 sets",
      reps: "6-10 reps"
    },
    { 
      name: "Dumbbell Rows", 
      image: "https://img.freepik.com/free-photo/handsome-young-athlete-working-out-gym_7502-5024.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", 
      description: "Dumbbell rows target the back muscles, improving posture and strength in the upper body.",
      difficulty: "Beginner",
      muscleGroups: ["Back", "Biceps", "Shoulders"],
      sets: "3-4 sets",
      reps: "10-12 reps"
    }
  ];
  
  // Weight loss exercises
  const lossExercises = [
    { 
      name: "Running", 
      image: "https://img.freepik.com/free-photo/full-length-portrait-active-young-caucasian-running-jogging-man-gradient-studio-neon-light_155003-9974.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", 
      description: "Running is a great cardiovascular exercise for burning calories and improving heart health.",
      difficulty: "Beginner",
      muscleGroups: ["Cardio", "Legs", "Core"],
      sets: "20-30 min",
      reps: "3-5 times/week"
    },
    { 
      name: "Cycling", 
      image: "https://img.freepik.com/free-photo/cyclist_1150-7484.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", 
      description: "Cycling is a low-impact exercise that helps burn fat and build endurance while being easy on the joints.",
      difficulty: "Beginner",
      muscleGroups: ["Cardio", "Legs", "Core"],
      sets: "30-45 min",
      reps: "3-4 times/week"
    },
    { 
      name: "Jump Rope", 
      image: "https://plus.unsplash.com/premium_photo-1664299555455-3e0a5542d3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8anVtcCUyMHJvcGV8ZW58MHx8MHx8fDA%3D", 
      description: "Jump rope is an excellent full-body exercise that boosts cardiovascular fitness and helps in fat loss.",
      difficulty: "Intermediate",
      muscleGroups: ["Cardio", "Full Body", "Coordination"],
      sets: "15-20 min",
      reps: "4-5 times/week"
    },
    { 
      name: "Burpees", 
      image: "https://img.freepik.com/free-photo/full-shot-sporty-woman-exercising-inside_23-2149326163.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", 
      description: "Burpees are a high-intensity exercise that targets multiple muscle groups and helps burn fat quickly.",
      difficulty: "Advanced",
      muscleGroups: ["Full Body", "Cardio", "Strength"],
      sets: "3-5 sets",
      reps: "10-15 reps"
    },
    { 
      name: "Mountain Climbers", 
      image: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW4lMjBDbGltYmVycyUyMGV4ZXJjaXNlfGVufDB8fDB8fHww", 
      description: "Mountain climbers are a full-body exercise that strengthens muscles and increases cardiovascular endurance.",
      difficulty: "Intermediate",
      muscleGroups: ["Core", "Shoulders", "Cardio"],
      sets: "3-4 sets",
      reps: "30-60 seconds"
    },
    { 
      name: "HIIT", 
      image: "https://media.istockphoto.com/id/1347836418/photo/shot-of-a-handsome-mature-man-standing-and-using-battle-ropes-in-the-gym-during-his-workout.webp?a=1&b=1&s=612x612&w=0&k=20&c=DL6aAZroC-ORRFUQk5dNF32HdZ_YizU6iiSf0Y5vOI4=", 
      description: "High-Intensity Interval Training (HIIT) involves short bursts of intense exercise followed by rest. It's highly effective for fat loss.",
      difficulty: "Advanced",
      muscleGroups: ["Full Body", "Cardio", "Strength"],
      sets: "20-30 min",
      reps: "3-4 times/week"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from(".exercise-hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".exercise-hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    // Floating icons animation
    gsap.to(".floating-exercise-icon", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Goal selector animation
    gsap.from(".exercise-goal-selector", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".exercise-goal-selector",
        start: "top 80%",
      },
    });

    // Exercise cards animation
    gsap.from(".exercise-card", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".exercise-card",
        start: "top 85%",
      },
    });
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-500';
      case 'Intermediate': return 'from-yellow-500 to-orange-500';
      case 'Advanced': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getGoalIcon = (goalType) => {
    switch(goalType) {
      case 'gain': return <GiMuscleUp className="text-4xl text-green-400" />;
      case 'lose': return <GiMuscleFat className="text-4xl text-blue-400" />;
      default: return <GiCardAceHearts className="text-4xl text-purple-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-green-500/3 to-emerald-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 floating-exercise-icon">
        <GiMuscleUp className="text-7xl text-green-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-exercise-icon">
        <GiWeightLiftingUp className="text-7xl text-emerald-500/20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="exercise-hero-title text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
              Exercise Library
            </span>
          </h1>
          <p className="exercise-hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect exercises for your fitness goals with detailed instructions and personalized recommendations
          </p>
        </div>
      </div>

      {/* Goal Selection */}
      <div className="exercise-goal-selector relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4">
                <FaCrosshairs className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Select Your Goal</h2>
              <p className="text-gray-400">Choose the type of exercises that align with your fitness objectives</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setGoal('maintain')}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  goal === 'maintain' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white' 
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <GiCardAceHearts className="text-2xl" />
                  <span className="font-semibold">Maintain</span>
                </div>
              </button>
              
              <button
                onClick={() => setGoal('gain')}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  goal === 'gain' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white' 
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <GiMuscleUp className="text-2xl" />
                  <span className="font-semibold">Weight Gain</span>
                </div>
              </button>
              
              <button
                onClick={() => setGoal('lose')}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  goal === 'lose' 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500 text-white' 
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <GiMuscleFat className="text-2xl" />
                  <span className="font-semibold">Weight Loss</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Display */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {goal === "maintain" ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
                {getGoalIcon('maintain')}
              </div>
              <h3 className="text-3xl font-bold text-gray-200 mb-4">Choose Your Goal</h3>
              <p className="text-gray-400 text-lg">Select a goal above to see personalized exercise recommendations</p>
            </div>
          ) : (
            <>
              {/* Exercise Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(goal === "gain" ? gainExercises : lossExercises).map((exercise, index) => (
                  <div 
                    key={index} 
                    className="exercise-card group cursor-pointer"
                    onClick={() => setSelectedExercise(exercise)}
                  >
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
                      {/* Exercise Image */}
                      <div className="relative mb-6 overflow-hidden rounded-xl">
                        <img 
                          src={exercise.image} 
                          alt={exercise.name} 
                          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Difficulty Badge */}
                        <div className="absolute top-3 right-3">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getDifficultyColor(exercise.difficulty)} text-white`}>
                            {exercise.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Exercise Info */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {exercise.name}
                        </h4>
                        
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {exercise.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2">
                          {exercise.muscleGroups.map((muscle, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300 border border-white/20">
                              {muscle}
                            </span>
                          ))}
                        </div>

                        {/* Sets & Reps */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <FaDumbbell className="text-green-400" />
                            <span>{exercise.sets}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <FaHeart className="text-red-400" />
                            <span>{exercise.reps}</span>
                          </div>
                        </div>

                        {/* Learn More Button */}
                        <div className="flex items-center justify-center gap-2 text-green-400 group-hover:text-green-300 transition-colors">
                          <span className="text-sm font-semibold">Learn More</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Exercise Detail Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedExercise.name}</h3>
              <button 
                onClick={() => setSelectedExercise(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <img 
              src={selectedExercise.image} 
              alt={selectedExercise.name} 
              className="w-full h-64 object-cover rounded-xl mb-6" 
            />
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{selectedExercise.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Difficulty</div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getDifficultyColor(selectedExercise.difficulty)} text-white`}>
                    {selectedExercise.difficulty}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Target</div>
                  <div className="text-white font-semibold">{selectedExercise.sets}</div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Muscle Groups</div>
                <div className="flex flex-wrap gap-2">
                  {selectedExercise.muscleGroups.map((muscle, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-500/20 rounded-lg text-sm text-green-300 border border-green-500/30">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseApp;
