import React, { forwardRef } from "react";
import DragNDrop from "../ui/DragNDrop/DragNDrop";
import st from "./styles.module.scss";

interface Props {
  handleDrop: (files: FileList) => void;
}
const GalleryTools = forwardRef<HTMLDivElement, Props>(
  ({ handleDrop }, ref) => {
    return (
      <section className={st.section}>
        <div className={st.section__inner}>
          <DragNDrop ref={ref} handleDrop={handleDrop} />
        </div>
      </section>
    );
  }
);

export default GalleryTools;
