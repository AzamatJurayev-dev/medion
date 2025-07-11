import { BannerType } from "@/types/BannerType";
import request from "@/utils/httpRequest";

export const getBanners = async () => {
  const response = await request.get("/banners", {
    params: { 
      populate: "*",
    }
  });
  return response;
};
export const getReklamas = async ():Promise<BannerType[]> => {
  const response = await request.get("/reklamas", {
    params: { 
      populate: "*",
    }
  });
  return response.data;
};
