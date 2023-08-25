import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useAppSelector } from "./../../store/hooks";
import CopyImg from "../../assets/images/ui/copy.svg";
import CloseImg from "../../assets/images/ui/close.svg";

import st from "./styles.module.scss";
import cn from "classnames";
import Modal from "../../components/Modal/Modal";

const GalleryImageModal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const location = window.location.href;
  const imageId = location.slice(location.lastIndexOf("/") + 1);

  const image = useAppSelector((state) =>
    state.app.gallery.find((item) => item.id === imageId)
  );
  const closeModal = () => {
    navigate("/gallery");
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  const copyToClipboard = () => {
    if (inputRef.current) {
      if ("clipboard" in navigator) {
        navigator.clipboard.writeText(inputRef.current.value);
      } else {
        document.execCommand("copy", true, inputRef.current.value);
      }
    }
  };
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} styles={{ zIndex: 3000 }}>
      <div className={st.card}>
        <button
          type="button"
          className={cn(st.btn, st.btn_close)}
          onClick={closeModal}
        >
          <img
            src={CloseImg}
            width={18}
            height={18}
            className={st["svg-box"]}
            alt={"cross"}
          />
        </button>
        <div className={st.card__inner}>
          {image ? (
            <>
              <div className={st["card__img-box"]}>
                <img
                  className={st.card__img}
                  height={320}
                  src={image.src}
                  alt="gallery-item"
                />
              </div>
              <span className={st.card__text}>
                Share this with your social Community
              </span>
              <div
                className={st["card__input-group"]}
                onClick={copyToClipboard}
              >
                <input
                  type={"text"}
                  value={location}
                  ref={inputRef}
                  readOnly
                  className={st.input}
                />
                <button type="button" className={cn(st.btn, st.btn_copy)}>
                  <ReactSVG
                    src={CopyImg}
                    width={24}
                    height={24}
                    className={st["svg-box"]}
                  />
                </button>
              </div>
            </>
          ) : (
            <p>No image found</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default GalleryImageModal;
