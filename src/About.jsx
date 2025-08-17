import React, { useEffect } from 'react';
import { FaHeart, FaUsers, FaShieldAlt, FaRocket, FaStar, FaLightbulb, FaTrophy, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp, GiCardAceHearts } from 'react-icons/gi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from "./assets/about.jpg";

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-3xl text-red-400" />,
      title: "Passion for Health",
      description: "We're passionate about helping people achieve their health and fitness goals through sustainable, science-based methods.",
      gradient: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: <FaUsers className="text-3xl text-blue-400" />,
      title: "Community First",
      description: "Building a supportive community where everyone can share experiences, motivate each other, and celebrate successes together.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-400" />,
      title: "Trust & Safety",
      description: "Providing reliable, evidence-based information and tools that prioritize your health and well-being above all else.",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <FaRocket className="text-3xl text-purple-400" />,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology and the latest fitness research to deliver better results.",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Active Users", icon: <FaUsers className="text-2xl text-blue-400" /> },
    { number: "95%", label: "Success Rate", icon: <FaTrophy className="text-2xl text-yellow-400" /> },
    { number: "50+", label: "Expert Trainers", icon: <FaStar className="text-2xl text-purple-400" /> },
    { number: "24/7", label: "Support", icon: <FaHeart className="text-2xl text-red-400" /> }
  ];

  const features = [
    "Personalized workout plans tailored to your goals",
    "Advanced nutrition tracking and meal planning",
    "Real-time progress monitoring and analytics",
    "Expert guidance from certified fitness professionals",
    "Community support and motivation",
    "Mobile app for on-the-go fitness tracking"
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from(".about-hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".about-hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
    });

    // Floating icons animation
    gsap.to(".floating-about-icon", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Values cards animation
    gsap.from(".about-value-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-values-section",
        start: "top 80%",
      },
    });

    // Image animation
    gsap.from(".about-hero-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-hero-image",
        start: "top 85%",
      },
    });

    // Achievements animation
    gsap.from(".about-achievement-item", {
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".about-achievements-section",
        start: "top 80%",
      },
    });

    // Features animation
    gsap.from(".about-feature-item", {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-features-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-32 floating-about-icon">
        <GiMuscleUp className="text-7xl text-purple-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-about-icon">
        <GiWeightLiftingUp className="text-7xl text-pink-500/20" />
      </div>
      <div className="absolute top-1/3 right-20 floating-about-icon">
        <GiCardAceHearts className="text-5xl text-blue-500/20" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="about-hero-title text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  About BodyCraft
                </span>
              </h1>
              <p className="about-hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We're more than just a fitness platform – we're your partners in transformation. 
                Our mission is to make health and fitness accessible, sustainable, and enjoyable for everyone.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-pink-400 mb-1">50+</div>
                  <div className="text-sm text-gray-300">Expert Trainers</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="about-hero-image">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="About BodyCraft - Fitness and Wellness"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
                  <FaHeart className="text-white text-xl" />
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-full">
                  <FaHeart className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values-section relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="about-value-card group">
                <div className={`bg-gradient-to-br ${value.gradient} backdrop-blur-xl rounded-2xl border ${value.borderColor} p-8 h-full transform hover:scale-105 transition-all duration-500 hover:shadow-2xl`}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements-section relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h3>
              <p className="text-gray-400">Numbers that tell the story of our success and impact</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="about-achievement-item text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="about-features-section relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes Us <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the unique features that set BodyCraft apart from other fitness platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-item flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  <FaCheckCircle className="text-xs" />
                </div>
                <p className="text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  BodyCraft was born from a simple yet powerful idea: fitness should be accessible, 
                  enjoyable, and sustainable for everyone. Our founders experienced firsthand the 
                  challenges of weight management and fitness transformation.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We understand that every journey is unique, which is why we've created a platform 
                  that adapts to your individual needs, goals, and lifestyle. Our team of experts 
                  combines cutting-edge technology with proven fitness science to deliver results.
                </p>
                <div className="flex items-center gap-3 text-purple-400 font-semibold">
                  <span>Learn More About Our Journey</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
                  <FaLightbulb className="text-5xl text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Innovation Meets Experience</h4>
                <p className="text-gray-400">
                  We continuously evolve our platform based on user feedback and the latest fitness research
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
              <FaRocket className="text-3xl text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the BodyCraft community today and discover what makes us the preferred choice 
              for fitness enthusiasts worldwide.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
