import Head from "next/head";
import Particles from "react-tsparticles";
import Timer from "../src/Timer";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Charming Delight</title>
        <meta name="description" content="Charming delight countdown before launch" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0000",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 35,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "star",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <Timer />
    </section>
  );
}
