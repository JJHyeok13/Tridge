import { NamedAPIResource } from "@/type/common";

export const getIdFromUrl = (item: NamedAPIResource) => {
  return item.url.split("/").filter(Boolean).pop() || "";
};
