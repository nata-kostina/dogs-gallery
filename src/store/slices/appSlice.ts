import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GalleryImage } from "../../types/entities.types";
import { v4 as uuid } from "uuid";

interface AppSlice {
  gallery: GalleryImage[];
}

const initialState: AppSlice = {
  gallery: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addImages: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((src) =>
        state.gallery.push({
          id: uuid(),
          src,
          isFavorite: false,
        })
      );
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const idx = state.gallery.findIndex((item) => item.id === action.payload);
      const image = state.gallery[idx];
      if (image) {
        state.gallery[idx] = { ...image, isFavorite: !image.isFavorite };
      }
    },
    deleteImage: (state, action: PayloadAction<string>) => {
      const updatedGallery = state.gallery.filter(
        (item) => item.id !== action.payload
      );
      state.gallery = updatedGallery;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { addImages, toggleFavorite, deleteImage } = appSlice.actions;
