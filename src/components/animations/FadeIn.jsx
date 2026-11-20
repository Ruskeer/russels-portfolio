import React from "react";
import { useState, useEffect, useRef } from "react";

// 4 props (inputs): children, delayed, duration, threshold
const FadeIn = ({children, delayed=0, duration=500, threshold=0.1}) => {
    const [isVisible, setIsVisible] = useState(false);
    //sticky notes or lets say a sign
    const elementRef = useRef(null);

    useEffect(() => {
        //watches the element and triggers animation
        const observer = new IntersectionObserver(
            // runs when the element enters or leaves the screen while scrolling
            ([entry]) => {
                //Trigger animation when element enters viewport 
                //is the element intersection and if the animation isnt triggered yet
                if (entry.isIntersecting && !isVisible) {
                    //trigger the animation by setting isVisible to true
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold, // Trigger slightly before the element is fully visible
                rootMargin: '0px 0px -50px 0px' 
            }
        );
        // if the element exists, start watching it
        //are we still looking at the element? if yes, then observe it
        if(elementRef.current) {
            observer.observe(elementRef.current);
        };

        //stop watching when the component is removed (or before the effect re-runs)
        return () => {
            if(elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
        //re-run the effect if threshold or isVisible changes
    }, [threshold, isVisible]);

        
        return (
            <div
            //basically all above the return are animation logics however
            //below the return is where we call out those logical function to start animating
            ref={elementRef}
            className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
            style={{
                animationDelay: isVisible ? `${delayed}ms` : '0ms',
                animationDuration: `${duration}ms`,
                animationFillMode: 'both'
            }}
            >
            {/* run the animation to whatever children is inside or from what pages is this used*/}
            {children}
            </div>
        )
    }


export default FadeIn