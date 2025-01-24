import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
  adminInfo: {
    adminAccount: "",
    adminName: "",
    adminPhone: "",
    adminEmail: "",
  },
};

const adminSlide = createSlice({
  name: "adminSlide",
  initialState,
  reducers: {
    verifyAdmin(state, action) {
      state.isAdmin = action.payload;
    },
    handleAdminInfo(state, action) {
      state.adminInfo.adminAccount = action.payload.taiKhoan;
      state.adminInfo.adminName = action.payload.hoTen;
      state.adminInfo.adminPhone = action.payload.soDT;
      state.adminInfo.adminEmail = action.payload.email;
    },
  },
});

export const { verifyAdmin, handleAdminInfo } = adminSlide.actions;

// export default adminSlide;
export default adminSlide.reducer;
