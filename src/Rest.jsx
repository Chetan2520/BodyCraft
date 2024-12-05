import React from 'react';

const Rest = () => {
 

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white font-font py-12 px-6">
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">4. Rest</h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="https://media.istockphoto.com/id/1351440122/photo/asleep-young-arab-man-sleeping-resting-peacefully-in-comfortable-bed-lying-with-closed-eyes.webp?a=1&b=1&s=612x612&w=0&k=20&c=NQxvrrKIMv0J-bzrmN6lWsBJOtkmP34-GboHGgQUmdw="
          alt="Restful Sleep"
          className="w-full max-w-4xl h-72 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text mb-6">
          The Importance of Restful Sleep
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Restful sleep is one of the most important factors in muscle recovery and overall well-being. Here’s why getting a good night's sleep is crucial for your fitness journey:
        </p>
        <div>
          <ul className="list-disc list-inside text-left text-sm md:text-base text-gray-300 space-y-4 max-w-3xl mx-auto">
            <li>
              <strong>Muscle Recovery:</strong> During sleep, your body repairs the tiny muscle tears caused by exercise, promoting muscle growth and strength.
            </li>
            <li>
              <strong>Boosts Growth Hormone:</strong> Sleep triggers the release of growth hormone, essential for muscle recovery and fat loss.
            </li>
            <li>
              <strong>Energy Restoration:</strong> Proper rest replenishes energy reserves, helping you feel energized and ready for your next workout.
            </li>
            <li>
              <strong>Prevents Overtraining:</strong> Adequate sleep prevents burnout and overtraining, ensuring consistent peak performance.
            </li>
            <li>
              <strong>Mental Clarity:</strong> Quality sleep improves mental focus and motivation, keeping you sharp and motivated for the day ahead.
            </li>
          </ul>
        </div>
      </div>

     
    </div>
  );
};

export default Rest;
