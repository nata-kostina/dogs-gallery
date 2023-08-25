import React from "react";
import Auth from "../../components/AuthForm/Auth";
import Hero from "../../components/Hero/Hero";
import st from "./styles.module.scss";

const AuthPage = () => {
  return (
    <>
      <div className={st.page}>
        <div className={st.container}>
          <Auth />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
