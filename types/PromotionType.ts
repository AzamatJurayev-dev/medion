import { Dayjs } from "dayjs";

export interface PromotionType {
  id: number;
  titleUz: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionUz: string;
  descriptionEn: string;
  promoRangeUz: string;
  promoRangeRu: string;
  promoRangeEn: string;
  servicePromotionUz: string;
  servicePromotionRu: string;
  servicePromotionEn: string;
  promoLocationUz: string;
  promoLocationRu: string;
  promoLocationEn: string;
  publishedAt: Dayjs;
  promoImage: PromoImageType;
}

export interface PromoImageType {
  id: number;
  url: string;
}

export interface Newstype {
  id: number;
  titleUz: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionUz: string;
  descriptionEn: string;
  subdescUz: string;
  subdescRu: string;
  subdescEn: string;
  publishedAt: Dayjs;
  newsImages: NewsImageType[];
}

export interface NewsImageType {
  id: number;
  url: string;
}

// //// Department/////
export interface DepartmentType {
  id: number;
  titleUz: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionUz: string;
  descriptionEn: string;
  subdescUz: string;
  subdescRu: string;
  subdescEn: string;
  publishedAt: Dayjs;
  consultationSum: number;
  consultationDollar: number;
  firstAppointmentSum: number;
  firstAppointmentDollar: number;
  retryAppointmentSum: number;
  retryAppointmentDollar: number;
  departmentImages: DepartmentImagesType[];
  departmentIcon: {
    id: number;
    url: string;
  };
}

export interface DepartmentImagesType {
  id: number;
  url: string;
  name: string;
  format?: {
    thumbnail?: {
      url: string;
    };
  };
}

export interface ImageTypes {
  id: number;
  url: string;
  name: string;
}
