const OpenMenu = ({ openButton, handleOpenMenu }) => {
  return (
    <>
      <button
        className="header__nav__opener"
        onClick={(e) => {
          handleOpenMenu(e);
        }}
      >
        {openButton}
      </button>
    </>
  );
};

export default OpenMenu;
