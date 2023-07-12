import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
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
    return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={   {
              name: "Plasma",
              background: {
                  color: {
                      value: "#000000",
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
                      speed: 5,
                      outModes: "bounce",
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
          }}
      />
    );
};

export default Particle;