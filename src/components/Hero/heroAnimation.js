import { gsap } from "gsap";

const heroAnimation = (isReduced) => {
  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.8,
      ease: "power1.inOut",
    },
  });

  if (isReduced) {
    tl.fromTo(
      ".hero__title",
      { opacity: 0 },
      { opacity: 1, duration: 1.2, delay: 0.1, ease: "power4.in" },
    )
      .fromTo(
        ".hero__text",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power4.in" },
        "<",
      )
      .fromTo(
        ".hero__button",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power4.in" },
        "<",
      );
  } else {
    tl.fromTo(
      ".hero__bg",
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1 },
    )
      .fromTo(".hero__title", { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, ">")
      .fromTo(
        ".hero__text",
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1 },
        "<+=0.5",
      )
      .fromTo(
        ".hero__button",
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1 },
        "<+=0.5",
      );
  }

  return tl;
};

export default heroAnimation;
