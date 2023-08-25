import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Main from "./../Main/Main";
import st from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <div className={st.wrapper}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
