import { useEffect } from "react";
// import projects from "../data/projects";
import { Cross2Icon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ project, handleCloseModal, modalDimensions }) => {
  //traduction:
  const { t } = useTranslation("projects");

  useEffect(() => {
    const modal = document.querySelector(".project-modal");
    modal.style.top = modalDimensions.top;
    modal.style.left = modalDimensions.left;
    modal.style.width = modalDimensions.width;
    modal.style.height = modalDimensions.height;
    modal.style.opacity = "100%";

    setTimeout(() => {
      modal.style.height = "100%";
      modal.style.top = "0px";

      setTimeout(() => {
        modal.style.left = "0px";
        modal.style.width = "100%";

        setTimeout(() => {
          modal.childNodes.forEach((child) => {
            child.style.opacity = "100%";

            setTimeout(() => {
              child.style.filter = "blur(0px)";
            }, 100);
          });
        }, 200);
      }, 200);
    }, 200);

    clearTimeout();
  }, [modalDimensions]);

  return (
    <>
      <div
        className="project-modal__picture"
        style={{ backgroundImage: `url(${project.picture})` }}
      ></div>
      <h2 className="project-modal__title --category">
        <span>{project.title}</span>
        <a className="project-modal__link" href={project.demo}>
          {t("externalLink")} <OpenInNewWindowIcon />
        </a>
        <span className="--category__name">{t("pTitle")}</span>
      </h2>
      <h4 className="project-modal__subtitle --category">
        {project.subTitle}
        <span className="--category__name">{t("pObjective")}</span>
      </h4>
      <p className="project-modal__type --category">
        {project.type}
        <span className="--category__name">{t("pType")}</span>
      </p>
      <p className="project-modal__description --category">
        {project.description}
        <span className="--category__name">{t("pDescription")}</span>
      </p>
      <h4 className="project-modal__date --category">
        {project.year}
        <span className="--category__name">{t("pDate")}</span>
      </h4>
      <div className="project-modal__technologies --category">
        {project.technologies.map((techno) => {
          return (
            <div key={techno.name}>
              <img src={techno.img} alt={`Logo de ${techno.name}`} />
              <p>{techno.name}</p>
            </div>
          );
        })}
        <span className="--category__name">{t("pTechnologies")}</span>
      </div>
      <p className="project-modal__functionalities --category">
        {project.functions}
        <span className="--category__name">{t("pFunctionnalities")}</span>
      </p>
      <div
        className="project-modal__close"
        onClick={(e) => {
          handleCloseModal();
        }}
      >
        <Cross2Icon className="close-icon" />
      </div>
    </>
  );
};

export default ProjectModal;
