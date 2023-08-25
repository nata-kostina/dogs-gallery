import React, { useState, useEffect } from "react";
import Advertising from "../../components/Banner/Banner";
import GalleryDashboard from "../../components/GalleryDashboard/GalleryDashboard";
import GalleryTools from "../../components/GalleryTools/GalleryTools";
import Modal from "../../components/Modal/Modal";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addImages } from "../../store/slices/appSlice";
import { areFilesValid } from "./../../utils/isFileValid";
import useRequestImages from "./../../services/useRequestImages";
import { Outlet } from "react-router-dom";
import Loader from "../../components/ui/Loader/Loader";

const GalleryPage = () => {
  const { isError, loading } = useRequestImages();
  const gallery = useAppSelector((state) => state.app.gallery);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(() => gallery.length === 0);

  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    if (!loading && !(gallery.length === 0)) {
      setIsModalOpen(false);
    } else if (!loading && gallery.length === 0) {
      setIsModalOpen(true);
    }
  }, [gallery, loading]);

  const handleDrop = (files: FileList) => {
    const filesArr = Array.from(files);
    if (areFilesValid(filesArr)) {
      const sources = filesArr.map(URL.createObjectURL);
      dispatch(addImages(sources));
      closeModal();
    }
  };
  return (
    <BasicLayout>
      {isError ? (
        <p>Ooops! Something went wrong...</p>
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <GalleryDashboard gallery={gallery} />
          <GalleryTools isModalOpen={isModalOpen} handleDrop={handleDrop} />
          <Advertising />
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <Outlet />
        </>
      )}
    </BasicLayout>
  );
};

export default GalleryPage;
