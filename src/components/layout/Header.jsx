import { useCallback, useEffect, useRef, useState } from "react";
import OpenMenu from "../OpenMenu";
import { DotsVerticalIcon, Cross1Icon, GearIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";
import SettingsModal from "../SettingModal";
import Modal from "react-modal";

const Header = () => {
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
        console.log("fermeture");
      });
    });
    navBackground.current.addEventListener("click", () => {
      setIsMenuOpen("--close");
      setOpenButton(<DotsVerticalIcon />);
      setTimeout(() => {
        navBackground.current.style.display = "none";
      }, 200);
      console.log("fermeture");
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
      console.log("ouverture");
    } else {
      setIsMenuOpen("--close");
      setOpenButton(<DotsVerticalIcon />);
      setTimeout(() => {
        navBackground.current.style.display = "none";
      }, 200);
      console.log("fermeture");
    }
  };

  //Gérer la modale des paramètres
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

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
              <a href="#my-story">My story</a>
            </li>
            <li className="header__nav__menu__element">
              <a href="#my-skills">My skills</a>
            </li>
            <li className="header__nav__menu__element">
              <a href="#my-projects">My projects</a>
            </li>
            <li className="header__nav__menu__element">
              <a href="#contact-me">Contact me</a>
            </li>
          </ul>
          <OpenMenu openButton={openButton} handleOpenMenu={handleOpenMenu} />
        </nav>
        <button
          className="settings-button"
          onClick={(e) => {
            openSettings(e);
          }}
        >
          <GearIcon />
        </button>
        <div className="header__nav-background" ref={navBackground}></div>
      </header>
      <Modal
        isOpen={settingsIsOpen}
        onRequestClose={() => handleCloseSettings()}
        contentLabel="Settings menu"
        className="settings-modal"
      >
        <SettingsModal handleCloseSettings={handleCloseSettings} />
      </Modal>
    </>
  );
};

export default Header;
