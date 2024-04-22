import contactIllustration from "../../assets/images/contact-illustration.png";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact-me">
        <div className="contact__content">
          <img
            className="contact__content__image --view-animated --text-fade-in --entry-picture"
            src={contactIllustration}
            alt="Illustration de mes contacts"
          />
          <div className="contact__content__ways">
            <h1 className="contact__content__ways__title">
              I'd be happy to talk
            </h1>
            <p className="contact__content__ways__description">
              Contact forms are good but it will be easier and quicker for you
              to click below :
            </p>
            <div className="contact__content__ways__list">
              <p className="contact__content__ways__list__element --item-pop-up">
                <a href="mailto:lort@lort.dev">
                  <EnvelopeClosedIcon />
                  <span>E-mail me</span>
                </a>
              </p>
              <p className="contact__content__ways__list__element --item-pop-up">
                <a href="tel:+336000000000">
                  <MobileIcon />
                  <span>Call me</span>
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
