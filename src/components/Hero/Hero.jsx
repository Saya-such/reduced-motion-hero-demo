import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import heroAnimation from "./heroAnimation";
import Button from "../Button";
import Toggle from "../Toggle";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const [toggleReduced, setToggleReduced] = useState(false);
  const systemReduced = usePrefersReducedMotion();
  const isReduced = systemReduced || toggleReduced;

  const container = useRef(null);

  useGSAP(
    () => {
      // ⚠️ create GSAP timeline inside useGSAP (DOM must be ready!!!)
      const tl = heroAnimation(isReduced).play();
    },
    { dependencies: [isReduced], scope: container, revertOnUpdate: true },
  );

  return (
    <section ref={container} className="hero">
      <div className="hero__inner">
        <div className="hero__title-area">
          <h1 className="hero__title">
            Less Motion,
            <br />
            Better Experience
          </h1>
        </div>
        <div className="hero__content">
          <p className="hero__text">
            Frontend Showcase by{" "}
            <a
              href="https://such-web.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              such
            </a>
          </p>
          <Button className="hero__button" isReduced={isReduced} />
        </div>
      </div>
      <div className="hero__bg"></div>
      <Toggle
        className="hero__toggle"
        disabled={systemReduced}
        isReduced={isReduced}
        onChange={() => {
          setToggleReduced((prev) => !prev);
        }}
      />
    </section>
  );
};

export default Hero;
