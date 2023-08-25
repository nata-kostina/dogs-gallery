import React from "react";
import st from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main className={st.main}>
      <div className={st.main__inner}>{children}</div>
    </main>
  );
};

export default Main;
