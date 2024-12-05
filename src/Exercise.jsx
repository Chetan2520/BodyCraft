import React, { useState } from 'react';

const ExerciseApp = () => {
  const [goal, setGoal] = useState('maintain'); // maintain, gain, or lose

  // Weight gain exercises
  const gainExercises = [
    { name: "Deadlift", image: "https://img.freepik.com/free-photo/muscular-build-man-making-effort-while-weightlifting-cross-training-gym_637285-2488.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", description: "Deadlifts target multiple muscles, especially the hamstrings, glutes, and lower back. It's great for building overall strength and muscle mass." },
    { name: "Squats", image: "https://img.freepik.com/free-photo/sporty-woman-doing-squats-muscular-fitness-woman-military-sportswear-isolated-white-wall-fitness-healthy-lifestyle-concept_231208-10499.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", description: "Squats are essential for building lower body strength, improving posture, and increasing muscle mass in the thighs and glutes." },
    { name: "Bench Press", image: "https://media.istockphoto.com/id/180200014/photo/a-man-lifting-weights-on-a-bench-press.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdPRVKvyzkm0jm_433_2X9gmUBw4LoKiYkBF0UepMaA=", description: "The bench press works the chest, shoulders, and triceps. It's a fundamental exercise for building upper body strength." },
    { name: "Pull-Ups", image: "https://media.istockphoto.com/id/480174782/photo/pull-ups.webp?a=1&b=1&s=612x612&w=0&k=20&c=BBgkdtKLuXThQiXCmFn8NlfpwTiQAJDCZVfRHSSKJgc=", description: "Pull-ups target the back, biceps, and shoulders. They're a great bodyweight exercise for building upper body strength." },
    { name: "Overhead Press", image: "https://images.unsplash.com/photo-1682531023987-8e711baa95f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3ZlcmhlYWQlMjBQcmVzc3xlbnwwfHwwfHx8MA%3D%3D", description: "The overhead press strengthens the shoulders, triceps, and upper chest. It's key for building upper body mass." },
    { name: "Dumbbell Rows", image: "https://img.freepik.com/free-photo/handsome-young-athlete-working-out-gym_7502-5024.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", description: "Dumbbell rows target the back muscles, improving posture and strength in the upper body." }
  ];
  
  // Weight loss exercises
  const lossExercises = [
    { name: "Running", image: "https://img.freepik.com/free-photo/full-length-portrait-active-young-caucasian-running-jogging-man-gradient-studio-neon-light_155003-9974.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", description: "Running is a great cardiovascular exercise for burning calories and improving heart health." },
    { name: "Cycling", image: "https://img.freepik.com/free-photo/cyclist_1150-7484.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", description: "Cycling is a low-impact exercise that helps burn fat and build endurance while being easy on the joints." },
    { name: "Jump Rope", image: "https://plus.unsplash.com/premium_photo-1664299555455-3e0a5542d3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8anVtcCUyMHJvcGV8ZW58MHx8MHx8fDA%3D", description: "Jump rope is an excellent full-body exercise that boosts cardiovascular fitness and helps in fat loss." },
    { name: "Burpees", image: "https://img.freepik.com/free-photo/full-shot-sporty-woman-exercising-inside_23-2149326163.jpg?ga=GA1.1.1839754259.1704250755&semt=ais_hybrid", description: "Burpees are a high-intensity exercise that targets multiple muscle groups and helps burn fat quickly." },
    { name: "Mountain Climbers", image: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW4lMjBDbGltYmVycyUyMGV4ZXJjaXNlfGVufDB8fDB8fHww", description: "Mountain climbers are a full-body exercise that strengthens muscles and increases cardiovascular endurance." },
    { name: "HIIT", image: "https://media.istockphoto.com/id/1347836418/photo/shot-of-a-handsome-mature-man-standing-and-using-battle-ropes-in-the-gym-during-his-workout.webp?a=1&b=1&s=612x612&w=0&k=20&c=DL6aAZroC-ORRFUQk5dNF32HdZ_YizU6iiSf0Y5vOI4=", description: "High-Intensity Interval Training (HIIT) involves short bursts of intense exercise followed by rest. It's highly effective for fat loss." }
  ];

  return (
    <div className="min-h-screen font-font bg-black text-white flex flex-col items-center justify-center py-12 px-8">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">3.Exercise</h1>
      
      {/* Goal Selection */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-lg font-medium mb-2 text-gray-300">Select Your Goal</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="maintain">Choose option</option>
          <option value="gain">Weight Gain</option>
          <option value="lose">Weight Loss</option>
        </select>
      </div>

      {/* Display Exercises based on goal */}
      <div className="w-full max-w-4xl space-y-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 md:gap-8">
          {goal === "gain" && gainExercises.map((exercise, index) => (
            <div key={index} className="bg-[#141314] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center space-y-4">
                <img src={exercise.image} alt={exercise.name} className="w-36 h-36 object-cover rounded-full border-4 border-green-500" />
                <h4 className="text-xl font-semibold text-center text-green-400">{exercise.name}</h4>
                <p className="text-gray-300 text-center">{exercise.description}</p>
              </div>
            </div>
          ))}
          {goal === "lose" && lossExercises.map((exercise, index) => (
            <div key={index} className="bg-[#141314] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center space-y-4">
                <img src={exercise.image} alt={exercise.name} className="w-36 h-36 object-cover rounded-full border-4 border-blue-500" />
                <h4 className="text-xl font-semibold text-center text-blue-400">{exercise.name}</h4>
                <p className="text-gray-300 text-center">{exercise.description}</p>
              </div>
            </div>
          ))}
          {goal === "maintain" && (
            <p className="text-center text-gray-400"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseApp;
