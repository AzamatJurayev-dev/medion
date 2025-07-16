import { AwardsType, BannerType, PartnersType } from "@/types/BannerType";
import { Newstype, PromotionType } from "@/types/PromotionType";
import request from "@/utils/httpRequest";

export const getBanners = async (): Promise<BannerType[]> => {
  const response = await request.get("/banners", {
    params: {
      populate: "*",
    },
  });
  return response.data;
};
//  ///// Promotions /////

export const getPromotions = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<PromotionType[]> => {
  const response = await request.get("/promotions", {
    params: {
      populate: "*",
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
    },
  });

  return response.data;
};

export const getPromotionById = async (
  id: string
): Promise<PromotionType | null> => {
  const response = await request.get(`/promotions`, {
    params: {
      "filters[id][$eq]": id,
      populate: "*",
    },
  });
  return response.data[0] ?? null;
};

// ////// News ////////
export const getNews = async (): Promise<Newstype[]> => {
  const response = await request.get("/news", {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const getNewsById = async (id: string): Promise<Newstype | null> => {
  const response = await request.get(`/news`, {
    params: {
      "filters[id][$eq]": id,
      populate: "*",
    },
  });
  return response.data[0];
};
// ///////// Partners ///////////
export const getPartners = async (): Promise<PartnersType[]> => {
  const response = await request.get("/partners", {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const getPartnersById = async (
  id: string
): Promise<PartnersType | null> => {
  const response = await request.get(`/partners`, {
    params: {
      "filters[id][$eq]": id,
      populate: "*",
    },
  });
  return response.data[0];
};
// Awards//////
export const getAwards = async (): Promise<AwardsType[]> => {
  const response = await request.get("/awards", {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

////// Department ////// 

export const getDepartments = async (): Promise<PartnersType[]> => {
  const response = await request.get("/departments", {
    params: {
      populate: "departmentIcon",
    },
  });
  return response.data;
};

export const getDepartmentByid = async (
  id: string
): Promise<PartnersType | null> => {
  const response = await request.get(`/departments`, {
    params: {
      "filters[id][$eq]": id,
      populate: "*",
    },
  });
  return response.data[0];
};