import reactLogo from "../../assets/images/logo-react.png";
import reduxLogo from "../../assets/images/logo-redux.png";
import sassLogo from "../../assets/images/logo-sass.png";
import expressLogo from "../../assets/images/logo-express.png";

const Skills = () => {
  const handleClick = (e) => {
    const type = e.currentTarget.getAttribute("data-type");
    const headers = document.querySelectorAll(
      ".skills__content__headers__element"
    );
    const descriptions = document.querySelectorAll(
      ".skills__content__descriptions__element"
    );
    const currentHeader = document.querySelector(
      ".skills__content__headers__element[data-type='" + type + "']"
    );
    const currentDescription = document.querySelector(
      ".skills__content__descriptions__element[data-type='" + type + "']"
    );

    headers.forEach((header) => {
      header.classList.remove("--current");
      header.classList.add("--covered");
    });

    descriptions.forEach((description) => {
      description.classList.remove("--current");
      description.classList.add("--covered");
      description.classList.add("--changing");
      setTimeout(() => {
        description.classList.remove("--changing");
      }, 200);
      clearTimeout();
    });

    currentHeader.classList.remove("--covered");
    currentHeader.classList.add("--current");

    currentDescription.classList.remove("--covered");
    currentDescription.classList.add("--current");
  };

  return (
    <>
      <section className="skills" id="my-skills">
        <h1 className="skills__title --view-animated --text-fade-in --entry-text">
          I love creating apps that are...
        </h1>
        <div className="skills__content">
          <div className="skills__content__headers">
            <div
              className="skills__content__headers__element --current"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="react"
            >
              <img src={reactLogo} alt="Logo de React" />
              <span>interactive</span>
            </div>
            <div
              className="skills__content__headers__element --covered"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="sass"
            >
              <img src={sassLogo} alt="Logo de Sass" />
              <span>gorgeous</span>
            </div>
            <div
              className="skills__content__headers__element --covered"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="redux"
            >
              <img src={reduxLogo} alt="Logo de Redux" />
              <span>fluid</span>
            </div>
            <div
              className="skills__content__headers__element --covered"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="express"
            >
              <img src={expressLogo} alt="Logo de Express" />
              <span>connected</span>
            </div>
          </div>
          <div className="skills__content__descriptions">
            <div
              className="skills__content__descriptions__element --current"
              data-type="react"
            >
              <img
                src={reactLogo}
                alt="Logo de React"
                className="skills__content__descriptions__element__img"
              />
              <h2 className="skills__content__descriptions__element__title">
                Interactive apps with React
              </h2>
              <div className="skills__content__descriptions__element__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                cupiditate ex? Vero rerum beatae autem quibusdam ex tempore
                deserunt, sed rem, at odit odio nulla! Praesentium ex odio
                laudantium ea!
              </div>
            </div>
            <div
              className="skills__content__descriptions__element --covered"
              data-type="sass"
            >
              <img
                src={sassLogo}
                alt="Logo de Sass"
                className="skills__content__descriptions__element__img"
              />
              <h2 className="skills__content__descriptions__element__title">
                Gorgeous apps with Sass
              </h2>
              <div className="skills__content__descriptions__element__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                cupiditate ex? Vero rerum beatae autem quibusdam ex tempore
                deserunt, sed rem, at odit odio nulla! Praesentium ex odio
                laudantium ea!
              </div>
            </div>
            <div
              className="skills__content__descriptions__element --covered"
              data-type="redux"
            >
              <img
                src={reduxLogo}
                alt="Logo de Redux"
                className="skills__content__descriptions__element__img"
              />
              <h2 className="skills__content__descriptions__element__title">
                Fluid apps with Redux
              </h2>
              <div className="skills__content__descriptions__element__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                cupiditate ex? Vero rerum beatae autem quibusdam ex tempore
                deserunt, sed rem, at odit odio nulla! Praesentium ex odio
                laudantium ea!
              </div>
            </div>
            <div
              className="skills__content__descriptions__element --covered"
              data-type="express"
            >
              <img
                src={expressLogo}
                alt="Logo de Express"
                className="skills__content__descriptions__element__img"
              />
              <h2 className="skills__content__descriptions__element__title">
                Connected apps with Express
              </h2>
              <div className="skills__content__descriptions__element__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                cupiditate ex? Vero rerum beatae autem quibusdam ex tempore
                deserunt, sed rem, at odit odio nulla! Praesentium ex odio
                laudantium ea!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
