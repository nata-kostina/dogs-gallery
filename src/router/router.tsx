import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/authorization/AuthPage";
import GalleryPage from "../pages/gallery/GalleryPage";
import GalleryImageModal from "./../pages/galleryImageModal/GalleryImageModal";

export const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        index: true,
        element: <AuthPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
        children: [
          {
            path: ":id",
            element: <GalleryImageModal />,
          },
        ],
      },
      {
        path: "*",
        element: <p>No match</p>,
      },
    ],
  },
]);

export const RouterPaths = [
  { text: "Gallery", link: "/gallery" },
  { text: "About", link: "/about" },
  { text: "Store", link: "/store" },
];
