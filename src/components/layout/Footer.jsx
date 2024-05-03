import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <>
      <footer>
        <p>{t("copyright")}</p>
      </footer>
    </>
  );
};

export default Footer;
