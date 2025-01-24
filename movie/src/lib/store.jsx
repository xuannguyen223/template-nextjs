import { configureStore } from "@reduxjs/toolkit";
import adminSlide from "./features/admin/adminSlide";

export const store = () => {
  return configureStore({
    reducer: {
      admin: adminSlide,
    },
  });
};
