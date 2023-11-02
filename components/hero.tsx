import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';


const HeroSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.wobbly,
  });

  return (
    <div className="hero relative h-screen overflow-hidden">
      {/* Floating stars */}
      <div className="stars animate-stars"></div>

      {/* Sky background */}
      <div className="bg-gradient-to-b from-sky-light to-sky-dark h-3/4 w-full absolute top-0 left-0"></div>

      <div className="text-white text-center relative z-10">
        <animated.h1
          className="text-4xl md:text-6xl font-bold tracking-wider"
          style={fadeIn}
        >
          Full Stack Developer
        </animated.h1>
        <animated.p className="text-lg md:text-xl mt-2" style={fadeIn}>
          Crafting Digital Solutions
        </animated.p>
      </div>

      {/* Floating person with computer SVG */}
      <div className="floating-svg">
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="fill-current text-white animate-float"
          style={fadeIn}
        >
          {/* Include your SVG illustration here */}
        </animated.svg>
      </div>
    </div>
  );
};

export default HeroSection;

