import { useCallback, useEffect, useRef, useState } from "react";
import OpenMenu from "../OpenMenu";
import {
  DotsVerticalIcon,
  Cross1Icon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";
import SettingsModal from "../SettingModal";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";

const Header = () => {
  //traduction :
  const { t } = useTranslation("header");
  //Gérer la réduction du header au scroll
  const header = useRef(null);
  const navMenu = useRef(null);
  const navBackground = useRef(null);
  const [headerLocked, setHeaderLocked] = useState("");
  const [openButton, setOpenButton] = useState(<DotsVerticalIcon />);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 240) {
      setHeaderLocked("header--locked");
    } else {
      setHeaderLocked("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    navMenu.current.childNodes.forEach((child) => {
      child.addEventListener("click", () => {
        navMenu.current.classList.remove("--open");
        navMenu.current.classList.add("--close");
        setIsMenuOpen("--close");
        setOpenButton(<DotsVerticalIcon />);
        setTimeout(() => {
          navBackground.current.style.display = "none";
        }, 200);
      });
    });
    navBackground.current.addEventListener("click", () => {
      setIsMenuOpen("--close");
      setOpenButton(<DotsVerticalIcon />);
      setTimeout(() => {
        navBackground.current.style.display = "none";
      }, 200);
    });
  }, []);

  //Gérer l'ouverture du menu en mode mobile
  const [isMenuOpen, setIsMenuOpen] = useState("--close");

  const handleOpenMenu = (e) => {
    if (e.target) {
      e.target.classList.add("--changing");
      setTimeout(() => {
        e.target.classList.remove("--changing");
      }, 200);
    }
    if (isMenuOpen === "--close") {
      navBackground.current.style.display = "block";
      setTimeout(() => {
        setIsMenuOpen("--open");
        setOpenButton(<Cross1Icon />);
      }, 1);
    } else {
      setIsMenuOpen("--close");
      setOpenButton(<DotsVerticalIcon />);
      setTimeout(() => {
        navBackground.current.style.display = "none";
      }, 200);
    }
  };

  //Gérer la modale des paramètres
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [settingsPosition, setSettingsPosition] = useState(null);
  const settingsButton = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (settingsButton.current) {
        const rect = settingsButton.current.getBoundingClientRect();
        setSettingsPosition({
          left: rect.left + "px",
          top: rect.top + "px",
        });
      }
    };

    window.addEventListener("resize", updatePosition);

    // Appel initial pour définir la position
    updatePosition();

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const openSettings = () => {
    setSettingsIsOpen(true);
  };

  const handleCloseSettings = () => {
    document.querySelector(".ReactModal__Overlay").style.backdropFilter =
      "blur(0px)";
    document.querySelector(".settings-modal").style.opacity = "0%";
    setTimeout(() => {
      setSettingsIsOpen(false);
    }, 300);
    clearTimeout();
  };

  return (
    <>
      <header ref={header} className={`header ${headerLocked}`}>
        <div className="header__logo">
          <NavLink to="https://lort.dev">Lort</NavLink>
        </div>
        <nav className="header__nav">
          <ul className={`header__nav__menu ${isMenuOpen}`} ref={navMenu}>
            <li className="header__nav__menu__element">
              <a href="#my-story">{t("story")}</a>
            </li>
            <li className="header__nav__menu__element">
              <a href="#my-skills">{t("skills")}</a>
            </li>
            <li className="header__nav__menu__element">
              <a href="#my-projects">{t("projects")}</a>
            </li>
            <li className="header__nav__menu__element">
              <a href="#contact-me">{t("contact")}</a>
            </li>
          </ul>
          <OpenMenu openButton={openButton} handleOpenMenu={handleOpenMenu} />
        </nav>
        <button
          className="settings-button"
          onClick={(e) => {
            openSettings(e);
          }}
          ref={settingsButton}
        >
          <MixerHorizontalIcon />
        </button>
        <div className="header__nav-background" ref={navBackground}></div>
      </header>
      <Modal
        isOpen={settingsIsOpen}
        onRequestClose={() => handleCloseSettings()}
        contentLabel="Settings menu"
        className="settings-modal"
      >
        <SettingsModal
          handleCloseSettings={handleCloseSettings}
          settingsPosition={settingsPosition}
        />
      </Modal>
    </>
  );
};

export default Header;
