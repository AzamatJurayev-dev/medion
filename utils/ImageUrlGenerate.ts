/* eslint-disable @typescript-eslint/no-explicit-any */
export const getImageUrl = (image?: any) => {
  const base = process.env.BASE_URL;
  if (!base || !image?.url) return "/no-image.jpg";
  return `${base}${image.url}`;
};
