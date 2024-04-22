import heroBackground from "../../assets/images/hero-background.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__content --view-animated --fade-out --exit-view">
          <h1 className="hero__content__title">
            Hi, I'm Lort. I'm a developer
          </h1>
          <p className="hero__content__text">
            You're here to know about me, about my skills, about my projects.
            Let me lead you or jump anywhere, anytime.
          </p>
          <button className="hero__content__action">
            <a href="#my-story">Start here</a>
          </button>
        </div>
        <div
          className="hero__background"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
