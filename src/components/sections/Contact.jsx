import { useTranslation } from "react-i18next";
import contactIllustration from "../../assets/images/contact-illustration.png";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <>
      <section className="contact" id="contact-me">
        <div className="contact__content">
          <div className="contact__content__image --view-animated --text-fade-in --entry-picture">
            <img src={contactIllustration} alt="Illustration de mes contacts" />
          </div>
          <div className="contact__content__ways">
            <h1 className="contact__content__ways__title">{t("title")}</h1>
            <p className="contact__content__ways__description">
              {t("description")}
            </p>
            <div className="contact__content__ways__list">
              <p className="contact__content__ways__list__element --item-pop-up">
                <a href="mailto:lort@lort.dev">
                  <EnvelopeClosedIcon />
                  <span>{t("mail")}</span>
                </a>
              </p>
              <p className="contact__content__ways__list__element --item-pop-up">
                <a href="tel:+33619833695">
                  <MobileIcon />
                  <span>{t("phone")}</span>
                </a>
              </p>
              <p className="contact__content__ways__list__element --item-pop-up">
                <a href="https://www.linkedin.com/in/lort/" target="new-tab">
                  <LinkedInLogoIcon />
                  <span>LinkedIn</span>
                  <ExternalLinkIcon />
                </a>
              </p>
              <p className="contact__content__ways__list__element --item-pop-up">
                <a href="https://github.com/Lort974" target="new-tab">
                  <GitHubLogoIcon />
                  <span>GitHub</span>
                  <ExternalLinkIcon />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
