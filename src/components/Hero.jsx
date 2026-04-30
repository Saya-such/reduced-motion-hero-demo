import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__title-area">
          <h1 className="hero__title">
            Less Motion,
            <br />
            Better Experience
          </h1>
        </div>
        <div className="hero__content">
          <p>Frontend Showcase by such</p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
