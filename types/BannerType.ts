export interface BannerType {
  id: number;
  titleUz: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionUz: string;
  descriptionEn: string;
  coverImage: CoverImageType;
}
export interface CoverImageType {
  id: number;
  url: string;
}

export interface PartnersType{
  id: number;
  title: string;
  subdescUz: string;
  subdescRu: string;
  subdescEn: string;
  descriptionUz: string;
  descriptionRu: string;
  descriptionEn: string;
  phoneNumber: string;
  link: string;
  partnerImage: {
    id: number;
    url: string;
    name: string;
  }
}

// askxnasjxasx//// 
export interface AwardsType {
  id: number;
  titleUz: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionUz: string;
  descriptionEn: string;
  awardImage: {
    id: number;
    url: string;
  }
}