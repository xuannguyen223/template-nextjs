import { adminHttp } from "@/services/interceptor/adminInterceptor";
import { USER_INFO_API } from "@/utils/constant";
import { handleAdminInfo, verifyAdmin } from "./adminSlide";

export const verifyAdminAction = () => {
  return async (dispatch, getState) => {
    const response = await adminHttp.post(USER_INFO_API);
    if (response.status === 200) {
      const userType = response.data.content.maLoaiNguoiDung;
      if (userType === "QuanTri") {
        dispatch(verifyAdmin(true));
        dispatch(handleAdminInfo(response.data.content));
        console.log("response.data.content: ", response.data.content);

        return;
      }
    }
  };
};
