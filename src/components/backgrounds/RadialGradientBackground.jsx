import React from "react";

const RadialGradientBackground = ({variant='hero', gradient=[]}) => {
    
    const variants = {
        hero: [
            {
                position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.5)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                ],
                blur: '0px',
                opacity: 0.5,
                },
                {
                position: 'top-1 left-1',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.5)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                ],
                blur: '0px',
                opacity: 0.5,
                },
                {
                position: 'bottom-1 right-1',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.5)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                ],
                blur: '0px',
                opacity: 0.5,
            },
        ],
        about : [
            {
                position: 'bottom-0 left-[75%]',
                size: 'w-[700px] h-[700px]',
                colors: [
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.5)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.45)', stop: '100%' },
                    { color: 'rgba(245, 158, 11, 0.25)', stop: '100%' },
                ],
                blur: '0px',
                opacity: 0.5,
            },
        ],
    };

    // picks the gradient set: custom ones if I pass them, otherwise the variant I named (hero by default)
    const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants.hero;  
    const generateGradient = (colors) => {
        const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(', ');

    // the full CSS gradient: transparent in the middle, my colors in a ring, transparent at the edge
        return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;
    };
    
    return (
        <div className="">
            {activeGradients.map((gradient, index) => (
                <div
                    key={index}
                    className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
                    style={{
                        background: generateGradient(gradient.colors),
                        filter: `blur(${gradient.blur})`,
                        opacity: gradient.opacity,
                    }}
                >

                </div>    
            ))}
        </div>
    )
}

export default RadialGradientBackground