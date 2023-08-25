import React from "react";
import st from "./styles.module.scss";
import Icon from "../../assets/images/brand/privacy-policy.svg";
import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer className={st.footer}>
      <div className={st.footer__inner}>
        <ReactSVG
          src={Icon}
          className={st.footer__img}
          width={40}
          height={40}
        />
        <span className={st.footer__text}>Privacy policy</span>
      </div>
    </footer>
  );
};

export default Footer;
