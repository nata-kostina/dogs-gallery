import React from "react";
import st from "./styles.module.scss";
import Dropdown from "../ui/DropDown/DropDown";
import GalleryList from "../GalleryList/GalleryList";
import { GalleryImage } from "./../../types/entities.types";

interface Props {
  gallery: GalleryImage[];
}

const GalleryDashboard = ({ gallery }: Props) => {
  return (
    <section className={st.section}>
      <div className={st.section__inner}>
        <div className={st.card}>
          <div className={st.section__header}>
            <h1 className={st.section__title}>Gallery</h1>
            <Dropdown options={options} />
          </div>
          <GalleryList gallery={gallery} />
        </div>
      </div>
    </section>
  );
};

const options = ["All", "Favorite", "Сначала старые", "Сначала новые"];

export default GalleryDashboard;
