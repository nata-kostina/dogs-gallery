import React, { useRef } from "react";
import st from "./styles.module.scss";
import cn from "classnames";
import { GalleryImage } from "./../../types/entities.types";
import { ReactSVG } from "react-svg";
import Trash from "../../assets/images/ui/trash.svg";
import { useDispatch } from "react-redux";
import { deleteImage, toggleFavorite } from "../../store/slices/appSlice";
import { Link } from "react-router-dom";
import HeartButton from "./../ui/HeartButton/HeartButton";

interface Props {
  item: GalleryImage;
}

const GalleryItem = React.memo(({ item }: Props) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(toggleFavorite(item.id));
  };
  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(deleteImage(item.id));
  };

  const refHeartPath = useRef<SVGPathElement | null>(null);
  const refHeartBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={st.item}>
      <Link to={item.id} className={st.link}>
        <img className={st.item__img} src={item.src} alt="gallery-item" />
      </Link>
      <button
        ref={refHeartBtn}
        type="button"
        className={cn(st.btn, st.btn_favorite)}
        onClick={handleFavoriteClick}
      >
        <HeartButton
          ref={refHeartPath}
          fill={item.isFavorite ? "#FFFFFF" : "none"}
        />
      </button>
      <button
        type="button"
        className={cn(st.btn, st.btn_trash)}
        onClick={handleDeleteClick}
      >
        <ReactSVG src={Trash} />
      </button>
    </div>
  );
});

export default GalleryItem;
