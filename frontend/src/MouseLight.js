import React, { useState, useEffect } from 'react';

const MouseLight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none lg:block hidden "
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                width: '0px',
                height: '0px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0)',
                boxShadow: '0 0 30px 30px rgba(224, 173, 255, 0.1)',
                transition: 'transform 100ms linear',
            }}
        />
    );
};

export default MouseLight;