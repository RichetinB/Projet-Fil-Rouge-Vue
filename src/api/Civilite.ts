import axiosClient from "../axios";

export const getCivilite = async () => {
  try {
    const response = await axiosClient.get("/civilites");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des civilités :", error);
    throw error;
  }
};
