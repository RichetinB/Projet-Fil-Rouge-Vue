import axiosClient from "../axios";

export const getSecteurs = async () => {
    try {
        const response = await axiosClient.get("/secteurs-activite");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des secteurs :", error);
        throw error;
    }
}