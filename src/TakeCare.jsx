import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import takeCareImg from "./assets/takeCareCanva2.png"
const TakeCare = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Image Animation
    gsap.from('.takeCare-img', {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.takeCare-img',
        start: 'top 85%',
      },
    });

    // Text Animation
    gsap.from('.takeCare-text', {
      opacity: 0,
      x: 100,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.takeCare-text',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <div className="container h-screen text-white font-font px-12 py-20 flex flex-col gap-12 md:flex md:flex-row md:gap-0 md:py-20">
      <div className="w-68 takeCare-img">
        <img className="md:max-w-2xl" src={takeCareImg} alt="Take Care" />
      </div>
      <div className="takeCare-text md:px-16 md:py-20">
        <h1 className="text-3xl font-bold mb-4 md:text-4xl">
          The Importance of Taking Care of Yourself
        </h1>
        <p className="text-xs text-slate-300 font-medium md:text-sm md:leading-7">
        Taking care of yourself is essential for both physical and mental well-being. It involves maintaining a healthy lifestyle, managing stress, eating nutritious food, and staying active. Prioritizing self-care helps improve your overall health, boosts energy levels, and enhances your mood. It also reduces the risk of chronic diseases and supports a balanced life. By focusing on self-care, you ensure that you are physically and emotionally prepared to handle life’s challenges. Remember, taking care of yourself is not selfish—it is a necessary step towards achieving personal growth, happiness, and long-term success.
        </p>
      </div>
    </div>
  );
};

export default TakeCare;
