import request from "@/utils/httpRequest";

export const getBanners = async () => {
  const response = await request.get("/banner", {
    params: { 
      populate: "*",
    }
  });
  return response.data;
};
export const getReklamas = async () => {
  const response = await request.get("/reklamas", {
    params: { 
      populate: "*",
    }
  });
  return response.data;
};
