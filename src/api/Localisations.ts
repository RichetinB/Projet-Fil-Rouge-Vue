import axiosClient from "../axios";
import type { Localisation } from "../interfaces/Personne";

export const getAllLocalisations = async (): Promise<Localisation[]> => {
  const response = await axiosClient.get('/localisations');
  return response.data;
}