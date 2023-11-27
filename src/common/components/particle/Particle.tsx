import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import type { IOutModes } from "tsparticles-engine";
const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    const particlesOptions = {
        name: "Plasma",
        background: {
            color: {
                value: "#1e1e1e",
            },
        },
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
            },
            size: {
                value: 0,
            },
            links: {
                enable: true,
                distance: 110,
                color: "#2fbf71",
                opacity: 0.4,
                width: 2,
            },
            move: {
                enable: true,
                speed: 3,
                outModes: {
                    default: "bounce",
                } as IOutModes,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
        },
        detectRetina: true,
    };
    return React.createElement(Particles, {
        style: { position: "absolute", zIndex: "-1" },
        id: "tsparticles",
        init: particlesInit,
        loaded: particlesLoaded,
        options: particlesOptions,
    });
};

export default Particle;