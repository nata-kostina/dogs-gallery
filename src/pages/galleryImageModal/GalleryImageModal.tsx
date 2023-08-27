import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import GalleryImageCard from "./GalleryImageCard";

const GalleryImageModal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/gallery");
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal} overlayStyles={{ zIndex: 3000 }}>
          <GalleryImageCard />
        </Modal>
      )}
    </>
  );
};

export default GalleryImageModal;
