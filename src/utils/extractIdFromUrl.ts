export const extractIdFromUrl = (url: string) => {
  const segments = url.split("/").filter(Boolean);
  return segments[segments.length - 1]; // 마지막 ID
};
