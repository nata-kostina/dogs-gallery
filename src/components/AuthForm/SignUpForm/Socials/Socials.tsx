import React from "react";
import st from "./styles.module.scss";
import { ReactSVG } from "react-svg";
import AppleImg from "../../../../assets/images/socials/apple.svg";
import GMailImg from "../../../../assets/images/socials/gmail.svg";
import FacebookImg from "../../../../assets/images/socials/facebook.svg";
import Vector from "../../../../assets/images/ui/vector.svg";

const Socials = () => {
  return (
    <div className={st["socials-box"]}>
      <ul className={st["socials-list"]}>
        {socials.map((social) => (
          <li key={social.id} className={st["socials-list__item"]}>
            <ReactSVG src={social.src} className={st["social-box"]} />
          </li>
        ))}
      </ul>
      <div className={st["socials-text-box"]}>
        <img src={Vector} alt="vector" className={st.vector} />
        <span className={st.text}>or</span>
      </div>
    </div>
  );
};

const socials = [
  { id: 0, src: AppleImg, title: "apple apps" },
  { id: 1, src: GMailImg, title: "gmail" },
  { id: 2, src: FacebookImg, title: "facebook" },
];

export default Socials;
