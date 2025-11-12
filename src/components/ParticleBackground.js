import React, { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const options = {
        background: {
            color: {
                value: "var(--primary-bg)",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "var(--accent-color-2)",
            },
            links: {
                color: "var(--accent-color-1)",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            style={{ position: 'absolute', zIndex: 0, top: 0, left: 0, width: '100%', height: '100%' }}
        />
    );
};

export default ParticleBackground;
