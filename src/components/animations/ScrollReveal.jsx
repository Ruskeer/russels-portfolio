import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
}) => {


  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const animationClasses = { // how my element looks before it shows up
    fadeUp: 'opacity-0 translate-y-8',
    fadeIn: 'opacity-0',
    slideLeft: 'opacity-0 -translate-x-12',
    slideRight: 'opacity-0 translate-x-12',
    scaleIn: 'opacity-0 scale-90',
  };

// how my element looks AFTER it shows up (fully visible, back in place)
  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref} // sticks the sign on this div so the lookout can watch it
       // if it's on screen use the final look, if not use the starting look I picked
      // transition-all makes it glide between the two
      className={`transition-all ease-out
        ${isVisible ? visibleClasses : animationClasses[animation]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal