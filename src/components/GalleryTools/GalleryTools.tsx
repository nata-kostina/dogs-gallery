import React from "react";
import DragNDrop from "../ui/DragNDrop/DragNDrop";
import st from "./styles.module.scss";

import Helper from "./../Helper/Helper";

interface Props {
  isModalOpen: boolean;
  handleDrop: (files: FileList) => void;
}
const GalleryTools = ({ isModalOpen, handleDrop }: Props) => {
  return (
    <section className={st.section}>
      <div className={st.section__inner}>
        <DragNDrop handleDrop={handleDrop} />
        {isModalOpen && <Helper />}
      </div>
    </section>
  );
};

export default GalleryTools;
