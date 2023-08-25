import React from "react";
import LogoImg from "../../../assets/images/brand/logo.svg";
import st from "./styles.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img className={st.logo} src={LogoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
