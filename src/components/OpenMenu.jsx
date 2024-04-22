import { DotsVerticalIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useRef } from "react";

const OpenMenu = ({
  setIsMenuOpen,
  isMenuOpen,
  setOpenButton,
  openButton,
  // navBackground,
}) => {
  const menuOpener = useRef(null);

  const handleOpenMenu = (e) => {
    if (menuOpener) {
      menuOpener.current.classList.add("--changing");
      setTimeout(() => {
        menuOpener.current.classList.remove("--changing");
      }, 200);
    }
    if (isMenuOpen === "--close") {
      // navBackground.current.style.display = "block";
      setTimeout(() => {
        setIsMenuOpen("--open");
        setOpenButton(<Cross1Icon />);
      }, 1);
    } else {
      setIsMenuOpen("--close");
      setOpenButton(<DotsVerticalIcon />);
      // setTimeout(() => {
      //   navBackground.current.style.display = "none";
      // }, 200);
    }
  };

  return (
    <>
      <button
        className="header__nav__opener"
        onClick={(e) => {
          handleOpenMenu(e);
        }}
        ref={menuOpener}
      >
        {openButton}
      </button>
    </>
  );
};

export default OpenMenu;
