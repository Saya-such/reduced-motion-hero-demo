import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroAnimation from "./heroAnimation";
import Button from "../Button";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // ⚠️ create GSAP timeline inside useGSAP (DOM must be ready!!!)
      const tl = heroAnimation({
        bg: bgRef.current,
        title: titleRef.current,
        text: textRef.current,
      });
      tl.play();
    },
    { scope: container },
  );

  return (
    <section ref={container} className="hero">
      <div className="hero__inner">
        <div className="hero__title-area">
          <h1 ref={titleRef} className="hero__title">
            Less Motion,
            <br />
            Better Experience
          </h1>
        </div>
        <div className="hero__content">
          <p ref={textRef}>
            Frontend Showcase by{" "}
            <a
              href="https://such-web.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              such
            </a>
          </p>
          <Button class="hero__button" />
        </div>
      </div>
      <div ref={bgRef} className="hero__bg"></div>
    </section>
  );
};

export default Hero;
