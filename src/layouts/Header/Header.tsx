import React from "react";
import st from "./styles.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/ui/Logo/Logo";
import CallForAction from "../../components/CallForAction/CallForAction";

const Header = () => {
  return (
    <header className={st.header}>
      <div className={st.header__inner}>
        <Logo />
        <Navigation />
        <CallForAction />
      </div>
    </header>
  );
};

export default Header;
