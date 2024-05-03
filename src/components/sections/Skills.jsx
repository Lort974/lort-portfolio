import reactLogo from "../../assets/images/logo-react.png";
import reduxLogo from "../../assets/images/logo-redux.png";
import sassLogo from "../../assets/images/logo-sass.png";
import expressLogo from "../../assets/images/logo-express.png";
import { useTranslation } from "react-i18next";

const Skills = () => {
  //traduction :
  const { t } = useTranslation("skills");

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
          <span>{t("title")}</span>
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
              <span>{t("interactive")}</span>
            </div>
            <div
              className="skills__content__headers__element --covered"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="sass"
            >
              <img src={sassLogo} alt="Logo de Sass" />
              <span>{t("gorgeous")}</span>
            </div>
            <div
              className="skills__content__headers__element --covered"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="redux"
            >
              <img src={reduxLogo} alt="Logo de Redux" />
              <span>{t("fluid")}</span>
            </div>
            <div
              className="skills__content__headers__element --covered"
              onClick={(e) => {
                handleClick(e);
              }}
              data-type="express"
            >
              <img src={expressLogo} alt="Logo de Express" />
              <span>{t("connected")}</span>
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
                {t("interactiveSubtitle")}
              </h2>
              <p className="skills__content__descriptions__element__text">
                {t("interactiveDescription")}
              </p>
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
                {t("gorgeousSubtitle")}
              </h2>
              <p className="skills__content__descriptions__element__text">
                {t("gorgeousDescription")}
              </p>
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
                {t("fluidSubtitle")}
              </h2>
              <p className="skills__content__descriptions__element__text">
                {t("fluidDescription")}
              </p>
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
                {t("connectedSubtitle")}
              </h2>
              <p className="skills__content__descriptions__element__text">
                {t("connectedDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
