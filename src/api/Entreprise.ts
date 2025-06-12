import axiosClient from "../axios";
import type { Entreprise } from "../interfaces/Entreprise";

export const getAllEntreprises = async (): Promise<Entreprise[]> => {
  const response = await axiosClient.get('/entreprises');
  return response.data;
}

export const getEntrepriseById = async (id: number): Promise<Entreprise> => {
  const response = await axiosClient.get(`/entreprises/${id}`);
  return response.data;
}

export const createEntreprise = async (entreprise: Partial<Entreprise>): Promise<Entreprise> => {
  const response = await axiosClient.post('/entreprises', entreprise);
  return response.data;
}

export const updateEntreprise = async (id: number, entreprise: Partial<Entreprise>): Promise<Entreprise> => {
  const response = await axiosClient.put(`/entreprises/${id}`, entreprise);
  return response.data;
}

export const deleteEntreprise = async (id: number): Promise<void> => {
  await axiosClient.delete(`/entreprises/${id}`);
}