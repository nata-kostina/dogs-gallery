import React from "react";
import { GalleryImage } from "./../../types/entities.types";
import GalleryItem from "./../GalleryItem/GalleryItem";
import st from "./styles.module.scss";

interface Props {
  gallery: GalleryImage[];
}

const GalleryList = ({ gallery }: Props) => {
  return (
    <>
      {gallery.length === 0 ? (
        <span className={st["gallery-info"]}>Gallery is empty</span>
      ) : (
        <>
          <ul className={st["gallery-list"]}>
            {gallery.map((item) => (
              <li key={item.id} className={st["gallery-list__item"]}>
                <GalleryItem item={item} />
              </li>
            ))}
          </ul>
          <button className={st.btn}>Load more</button>
        </>
      )}
    </>
  );
};

export default GalleryList;
