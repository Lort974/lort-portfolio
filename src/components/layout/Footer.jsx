import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <>
      <footer>{t("copyright")}</footer>
    </>
  );
};

export default Footer;
