export const imageUrlGenerator = (url?: string | null): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_MEDIA_URL || "";
  return url ? `${baseUrl}${url}` : "/images/default.jpg"; // fallback rasm
};
