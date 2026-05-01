import { gsap } from "gsap";

const heroAnimation = ({ bg, title, text }) => {
  const isReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.8,
      ease: "power1.inOut",
    },
  });

  if (isReduced) {
    tl.fromTo(
      title,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, delay: 0.1, ease: "power4.in" },
    ).fromTo(
      text,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power4.in" },
      "<",
    );
  } else {
    tl.fromTo(bg, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1 })
      .fromTo(title, { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, ">")
      .fromTo(text, { y: 5, opacity: 0 }, { y: 0, opacity: 1 }, "<+=0.5");
  }

  return tl;
};

export default heroAnimation;
