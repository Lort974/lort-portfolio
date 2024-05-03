import { useState } from "react";
import Modal from "react-modal";
import ProjectModal from "../components/ProjectModal";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import goutanoo from "../assets/images/goutanoo.jpg";
import datatable from "../assets/images/datatable.jpg";
import doudou from "../assets/images/doudou.jpg";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import mysql from "../assets/images/mysql.png";
import php from "../assets/images/php.png";
import js from "../assets/images/js.png";
import react from "../assets/images/logo-react.png";
import express from "../assets/images/logo-express.png";
import mongodb from "../assets/images/logo-mongodb.png";
import sass from "../assets/images/logo-sass.png";
import redux from "../assets/images/logo-redux.png";

// Configuration de l'élément racine pour le modal
Modal.setAppElement("#root");

const ProjectCard = () => {
  //traduction :
  const { t } = useTranslation("projects");

  const projects = [
    {
      id: 1,
      title: "Data table",
      subTitle: t("p1Subtitle"),
      description: t("p1Description"),
      picture: datatable,
      year: "2024",
      functions: t("p1Functions"),
      technologies: [
        { name: "React", img: react },
        { name: "Express", img: express },
        { name: "MongoDB", img: mongodb },
        { name: "SASS", img: sass },
        { name: "Redux", img: redux },
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
      demo: "/projects/goutanoo",
      type: t("p2Type"),
    },
    {
      id: 3,
      title: "My first client",
      subTitle: t("p3Subtitle"),
      description: t("p3Description"),
      picture: doudou,
      year: "2024",
      functions: t("p3Functions"),
      technologies: [
        { name: "React", img: react },
        { name: "Express", img: express },
        { name: "MongoDB", img: mongodb },
        { name: "SASS", img: sass },
        { name: "Redux", img: redux },
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
            <img
              className="projects__content__list__card__picture"
              src={project.picture}
              alt="Illustration du projet"
            />
            <h2 className="projects__content__list__card__title">
              {project.title}
            </h2>
            <h4 className="projects__content__list__card__subtitle">
              {project.subTitle}
            </h4>
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
          projectsLength={projects.length}
          setSelectedProject={setSelectedProject}
          selectedProject={selectedProject}
        />
      </Modal>
    </>
  );
};

export default ProjectCard;
