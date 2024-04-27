import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  ExternalLinkIcon,
  HomeIcon,
} from "@radix-ui/react-icons";

const Links = () => {
  return (
    <section className="links" id="links-me">
      <div className="links__content">
        <div className="links__content__ways">
          <h1 className="links__content__ways__title">Mes liens</h1>
          <p className="links__content__ways__description">
            Vous avez scanné le QR code présent sur mon CV. Merci 😃.
          </p>
          <div className="links__content__ways__list">
            <p className="links__content__ways__list__element --item-pop-up">
              <a href="../">
                <HomeIcon />
                <span>Page d'accueil de mon portfolio</span>
              </a>
            </p>
            <p className="links__content__ways__list__element --item-pop-up">
              <a href="https://www.linkedin.com/in/lort/" target="new-tab">
                <LinkedInLogoIcon />
                <span>LinkedIn</span>
                <ExternalLinkIcon />
              </a>
            </p>
            <p className="links__content__ways__list__element --item-pop-up">
              <a href="https://github.com/Lort974" target="new-tab">
                <GitHubLogoIcon />
                <span>GitHub</span>
                <ExternalLinkIcon />
              </a>
            </p>
          </div>
          <p className="links__content__ways__description">
            Vous pouvez aussi cliquez ci-dessous pour me contacter directement :
          </p>
          <div className="links__content__ways__list">
            <p className="links__content__ways__list__element --item-pop-up">
              <a href="mailto:lort@lort.dev">
                <EnvelopeClosedIcon />
                <span>E-mail me</span>
              </a>
            </p>
            <p className="links__content__ways__list__element --item-pop-up">
              <a href="tel:+336000000000">
                <MobileIcon />
                <span>Call me</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
