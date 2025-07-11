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
