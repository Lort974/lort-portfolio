import ProjectCard from "../ProjectCard";
import projectsBackground from "../../assets/images/projects-background.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");
  return (
    <>
      <section className="projects" id="my-projects">
        <div
          className="projects__background --background-fade-in"
          style={{ backgroundImage: `url(${projectsBackground})` }}
        ></div>
        <h1 className="projects__title --view-animated --text-fade-in --entry-text">
          {t("title")}
        </h1>
        <div className="projects__content">
          <div className="projects__content__list">
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
