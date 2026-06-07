import { fetchGallery, fetchAndrea } from "@/lib/pocketbase";

export const getImgs = async (): Promise<string[]> => {
  return fetchGallery();
};

export const getImgs2 = async (): Promise<string[]> => {
  return fetchAndrea();
};
