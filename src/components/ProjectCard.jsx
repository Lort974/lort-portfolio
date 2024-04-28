import { useState } from "react";
import Modal from "react-modal";
import projects from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import goutanoo from "../assets/images/goutanoo.jpg";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import mysql from "../assets/images/mysql.png";
import php from "../assets/images/php.png";
import js from "../assets/images/js.png";

// Configuration de l'élément racine pour le modal
Modal.setAppElement("#root");

const ProjectCard = () => {
  //traduction :
  const { t } = useTranslation("projects");

  const projects = [
    {
      id: 1,
      title: "Goutanoo",
      subTitle: t("p1Subtitle"),
      description: t("p1Description"),
      picture: goutanoo,
      year: "2018-2022",
      functions: t("p1Functions"),
      technologies: [
        { name: "PHP", img: php },
        { name: "MySql", img: mysql },
        { name: "JS", img: js },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
      ],
      demo: "#",
      type: t("p1Type"),
    },
    {
      id: 2,
      title: "Goutanoo",
      subTitle: t("p2Subtitle"),
      description: t("p2Description"),
      picture: goutanoo,
      year: "2018-2022",
      functions: t("p2Functions"),
      technologies: [
        { name: "PHP", img: php },
        { name: "MySql", img: mysql },
        { name: "JS", img: js },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
      ],
      demo: "#",
      type: t("p2Type"),
    },
    {
      id: 3,
      title: "Goutanoo",
      subTitle: t("p3Subtitle"),
      description: t("p3Description"),
      picture: goutanoo,
      year: "2018-2022",
      functions: t("p3Functions"),
      technologies: [
        { name: "PHP", img: php },
        { name: "MySql", img: mysql },
        { name: "JS", img: js },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
      ],
      demo: "#",
      type: t("p3Type"),
    },
  ];

  // Définition des états pour le modal et le focus
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalDimensions, setModalDimensions] = useState(null);

  const openModal = (e, projectId) => {
    const card = document.querySelector(
      `.projects__content__list__card[data-id='${projectId}']`
    );
    card.classList.add("--opening");
    setTimeout(() => {
      setModalIsOpen(true);
      setTimeout(() => {
        card.classList.remove("--opening");
      }, 400);
    }, 100);
    setSelectedProject(projectId);

    const position = card.getBoundingClientRect();
    setModalDimensions({
      top: position.top + "px",
      left: position.left + "px",
      width: position.width + "px",
      height: position.height + "px",
    });
  };

  const handleCloseModal = () => {
    document.querySelector(".ReactModal__Overlay").style.backdropFilter =
      "blur(0px)";
    document.querySelector(".project-modal").style.opacity = "0%";
    setTimeout(() => {
      setModalIsOpen(false);
    }, 300);
    clearTimeout();
  };

  return (
    <>
      {projects.map((project) => {
        return (
          <div
            className="projects__content__list__card"
            key={project.id}
            data-id={project.id}
          >
            <h2 className="projects__content__list__card__title">
              {project.title}
            </h2>
            <h4 className="projects__content__list__card__subtitle">
              {project.subTitle}
            </h4>
            <div
              className="projects__content__list__card__picture"
              style={{ backgroundImage: `url(${project.picture})` }}
            ></div>
            <p className="projects__content__list__card__description">
              {project.description}
            </p>
            <button
              className="projects__content__list__card__action"
              onClick={(e) => {
                openModal(e, project.id);
              }}
            >
              <EyeOpenIcon />
              <span>{t("cardAction")}</span>
            </button>
          </div>
        );
      })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => handleCloseModal()}
        contentLabel="Project details"
        className="project-modal"
      >
        <ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          handleCloseModal={handleCloseModal}
          modalDimensions={modalDimensions}
        />
      </Modal>
    </>
  );
};

export default ProjectCard;
