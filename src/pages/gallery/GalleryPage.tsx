import React, { useState, useEffect, useRef, useCallback } from "react";
import Advertising from "../../components/Banner/Banner";
import GalleryDashboard from "../../components/GalleryDashboard/GalleryDashboard";
import GalleryTools from "../../components/GalleryTools/GalleryTools";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addImages } from "../../store/slices/appSlice";
import { areFilesValid } from "./../../utils/isFileValid";
import useRequestImages from "./../../services/useRequestImages";
import { Outlet } from "react-router-dom";
import Loader from "../../components/ui/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import Helper from "../../components/Helper/Helper";

const GalleryPage = () => {
  const { isError, loading } = useRequestImages();
  const gallery = useAppSelector((state) => state.app.gallery);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toolRef = useRef<HTMLDivElement | null>(null);
  const [helperPosition, setHelperPosition] = useState<Record<string, string>>(
    {}
  );

  const closeModal = () => setIsModalOpen(false);
  const calculateModalPosition = useCallback(() => {
    if (toolRef.current) {
      const { left, top, right, bottom } =
        toolRef.current.getBoundingClientRect();
      setHelperPosition({
        top: top + "px",
        left: left + "px",
        height: bottom - top + "px",
        width: right - left + "px",
      });
    }
  }, []);
  useEffect(() => {
    const isOpen = gallery.length === 0 ? true : false;
    if (isOpen) {
      calculateModalPosition();
    }
    if (isModalOpen !== isOpen) {
      setIsModalOpen(isOpen);
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
  useEffect(() => {
    window.addEventListener("resize", calculateModalPosition);
    return () => {
      window.removeEventListener("resize", calculateModalPosition);
    };
  }, [calculateModalPosition]);
  return (
    <BasicLayout>
      {isError ? (
        <p>Ooops! Something went wrong...</p>
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <GalleryDashboard gallery={gallery} />
          <GalleryTools ref={toolRef} handleDrop={handleDrop} />
          <Advertising />
          {isModalOpen && (
            <Modal
              onClose={closeModal}
              modalStyles={{ ...helperPosition, transform: "none" }}
            >
              <Helper />
            </Modal>
          )}
          <Outlet />
        </>
      )}
    </BasicLayout>
  );
};

export default GalleryPage;
