import { useState } from "react";
import Modal from "react-modal";
import projects from "../data/projects";
import ProjectModal from "../components/ProjectModal";

// Configuration de l'élément racine pour le modal
Modal.setAppElement("#root");

const ProjectCard = () => {
  // Définition des états pour le modal et le focus
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalDimensions, setModalDimensions] = useState(null);

  const openModal = (e, projectId) => {
    const card = e.target.parentNode;
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
          <div className="projects__content__list__card" key={project.id}>
            <div
              className="projects__content__list__card__picture"
              style={{ backgroundImage: `url(${project.picture})` }}
            ></div>
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
              See details
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
          projectId={selectedProject}
          handleCloseModal={handleCloseModal}
          modalDimensions={modalDimensions}
        />
      </Modal>
    </>
  );
};

export default ProjectCard;
