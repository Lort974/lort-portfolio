import { useTranslation } from "react-i18next";
import heroBackground from "../../assets/images/hero-background.jpg";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <>
      <section className="hero">
        <div className="hero__content --view-animated --fade-out --exit-view">
          <h1 className="hero__content__title">{t("heroTitle")}</h1>
          <p className="hero__content__text">{t("heroDescription")}</p>
          <button className="hero__content__action">
            <ArrowDownIcon />
            <a href="#my-story">{t("heroAction")}</a>
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
