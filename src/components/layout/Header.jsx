import { useCallback, useEffect, useRef, useState } from "react";
import ToggleThemeButton from "../ToggleThemeButton";
import OpenMenu from "../OpenMenu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

const Header = () => {
  //Gérer la réduction du header au scroll
  const header = useRef(null);
  const navMenu = useRef(null);
  // const navBackground = useRef(null);
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
      });
    });
    // navBackground.current.addEventListener("click", () => {
    //   navMenu.current.classList.remove("--open");
    //   navMenu.current.classList.add("--close");
    //   setIsMenuOpen("--close");
    //   setOpenButton(<DotsVerticalIcon />);
    // });
  });

  //Gérer l'ouverture du menu en mode mobile
  const [isMenuOpen, setIsMenuOpen] = useState("--close");

  return (
    <>
      <header ref={header} className={`header ${headerLocked}`}>
        <div className="header__logo">Lort</div>
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
            <ToggleThemeButton />
          </ul>
          <OpenMenu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            openButton={openButton}
            setOpenButton={setOpenButton}
            // navBackground={navBackground}
          />
        </nav>
        {/* <div className="header__nav-background" ref={navBackground}></div> */}
      </header>
    </>
  );
};

export default Header;
