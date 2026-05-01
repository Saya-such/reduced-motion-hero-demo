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
          <p>
            Frontend Showcase by{" "}
            <a
              href="https://such-web.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              such
            </a>
          </p>
        </div>
      </div>
      <div className="hero__bg"></div>
    </section>
  );
};

export default Hero;
