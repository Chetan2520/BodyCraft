import React from "react";
import { useNavigate } from "react-router-dom";
import weightGainImg from "./assets/weightgain.png"
import weightLossImg from "./assets/weight-loss.png"
const Goal = () => {
  const navigate = useNavigate();

  return (
    <div className="container font-font text-white relative">
      <h1 className="goal-heading text-4xl font-bold items-center text-center mb-10 md:text-5xl">
        Choose Your Goal
      </h1>
      <div className="container p-4 flex flex-col gap-20 md:flex-row md:p-20 md:justify-evenly">
        {/* Weight Gain Card */}
        <div className="goal-card weight-gain rounded-2xl border p-7 flex flex-col justify-center items-center gap-4 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-6 hover:translate-y-3 md:p-12">
          <div className="h-24 w-24 rounded-full bg-white">
            <img src={weightGainImg} alt="Weight Gain" />
          </div>
          <h1 className="text-2xl font-bold mb-3 md:text-4xl">Weight Gain</h1>
          <p className="text-xs text-slate-300 font-medium md:text-sm md:leading-7">
            Learn how to gain weight healthily with a tailored plan.
          </p>
          <button
            className="goal-button text-lg h-12 font-normal relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-2 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-900 hover:to-blue-700"
            onClick={() => navigate('/weightgain')}
          >
            Weight Gain
          </button>
          {/* <button
            className="goal-button text-lg h-12 font-normal relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-2 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-900 hover:to-blue-700"
            onClick={() =>src=}
          >
            Weight Gain
          </button> */}
        </div>

        {/* Weight Loss Card */}
        <div className="goal-card weight-loss rounded-2xl border p-7 flex flex-col justify-center items-center gap-4 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-6 hover:translate-y-3 md:p-12">
          <div className="h-24 w-24 rounded-full bg-black">
            <img src={weightLossImg} alt="Weight Loss" />
          </div>
          <h1 className="text-2xl font-bold mb-3 md:text-4xl">Weight Loss</h1>
          <p className="text-xs text-slate-300 font-medium md:text-sm md:leading-7">
            Discover effective methods to achieve a healthy weight.
          </p>
          <button
            className="goal-button text-lg h-12 font-normal relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-2 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-900 hover:to-blue-700"
            onClick={() => navigate('/weightloss')}
          >
            Weight Loss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
