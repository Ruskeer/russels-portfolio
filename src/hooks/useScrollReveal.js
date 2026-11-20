import { useState, useEffect, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  // settings for the observer, with default values if I don't pass any
  const { threshold = 0.1, rootMargin = '0px' } = options;

  // starts as false because the element isn't on screen yet
  const [isVisible, setIsVisible] = useState(false);
  // I attach this to the element I want to watch
  const ref = useRef(null);

  useEffect(() => {
    // the actual element the ref is attached to
    const element = ref.current;
    // if no element is attached yet, stop here
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // true once the element shows up on screen
        if (entry.isIntersecting) {
          setIsVisible(true); // triggers the reveal
          observer.unobserve(element); // stop watching so it only reveals once
        }
      },
      // settings for the observer (shortcut for threshold: threshold, rootMargin: rootMargin)
      { threshold, rootMargin }
    );

    // start watching the element
    observer.observe(element);

    // cleanup: stop watching if the component gets removed
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  // the component that uses this hook gets the ref and isVisible
  return { ref, isVisible };
};