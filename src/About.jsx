import React, { useEffect, useRef } from 'react';
import { FaHeart, FaUsers, FaShieldAlt, FaRocket, FaStar, FaTrophy, FaCheckCircle, FaArrowRight, FaPlay } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp, GiCardAceHearts } from 'react-icons/gi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from "./assets/about.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const storyRef = useRef(null);
  const ctaRef = useRef(null);

  const values = [
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Passion for Health",
      description: "We're passionate about helping people achieve their health and fitness goals through sustainable, science-based methods.",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Community First",
      description: "Building a supportive community where everyone can share experiences, motivate each other, and celebrate successes together.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Trust & Safety",
      description: "Providing reliable, evidence-based information and tools that prioritize your health and well-being above all else.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology and the latest fitness research to deliver better results.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Active Users", icon: <FaUsers className="text-xl" />, color: "from-blue-500 to-cyan-500" },
    { number: "95%", label: "Success Rate", icon: <FaTrophy className="text-xl" />, color: "from-yellow-500 to-orange-500" },
    { number: "50+", label: "Expert Trainers", icon: <FaStar className="text-xl" />, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Support", icon: <FaHeart className="text-xl" />, color: "from-red-500 to-pink-500" }
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
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(".hero-title", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5"
      )
      .fromTo(".hero-subtitle", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5"
      )
      .fromTo(".hero-image", 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=0.8"
      );

    // Floating elements animation
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Values section animation
    gsap.fromTo(".value-card", 
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats animation
    gsap.fromTo(".stat-item", 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Features animation
    gsap.fromTo(".feature-item", 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Story section animation
    gsap.fromTo(".story-content", 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA animation
    gsap.fromTo(".cta-content", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-32 floating-element">
        <GiMuscleUp className="text-6xl text-purple-500/20" />
      </div>
      <div className="absolute bottom-32 right-32 floating-element">
        <GiWeightLiftingUp className="text-6xl text-pink-500/20" />
      </div>
      <div className="absolute top-1/3 right-20 floating-element">
        <GiCardAceHearts className="text-4xl text-blue-500/20" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    About BodyCraft
                  </span>
                </h1>
                <p className="hero-subtitle text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl lg:max-w-none">
                  We're more than just a fitness platform – we're your partners in transformation. 
                  Our mission is to make health and fitness accessible, sustainable, and enjoyable for everyone.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Expert Trainers</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={aboutImg}
                  alt="About BodyCraft - Fitness and Wellness"
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full shadow-lg">
                  <FaHeart className="text-white text-lg" />
                </div>
                <div className="absolute bottom-6 left-6 bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-full shadow-lg">
                  <FaTrophy className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card group">
                <div className={`bg-gradient-to-br ${value.bgColor} backdrop-blur-xl rounded-3xl border border-white/10 p-8 h-full transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-white/20`}>
                  <div className="text-center space-y-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={statsRef} className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h3>
              <p className="text-gray-400 text-lg">Numbers that tell the story of our success and impact</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="stat-item text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{achievement.number}</div>
                  <div className="text-gray-300 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes Us <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the unique features that set BodyCraft apart from other fitness platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-item group">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    <FaCheckCircle className="text-xs" />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="story-content space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">Our Story</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    BodyCraft was born from a simple yet powerful idea: fitness should be accessible, 
                    enjoyable, and sustainable for everyone. Our founders experienced firsthand the 
                    challenges of weight management and fitness transformation.
                  </p>
                  <p>
                    We understand that every journey is unique, which is why we've created a platform 
                    that adapts to your individual needs, goals, and lifestyle. Our team of experts 
                    combines cutting-edge technology with proven fitness science to deliver results.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-purple-400 font-semibold group cursor-pointer">
                  <span>Learn More About Our Journey</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl">
                  <FaStar className="text-5xl text-white" />
                </div>
                <h4 className="text-2xl font-bold">Innovation Meets Experience</h4>
                <p className="text-gray-400 text-lg">
                  We continuously evolve our platform based on user feedback and the latest fitness research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12 text-center shadow-2xl">
            <div className="cta-content space-y-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl">
                <FaRocket className="text-4xl text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join the BodyCraft community today and discover what makes us the preferred choice 
                  for fitness enthusiasts worldwide.
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
