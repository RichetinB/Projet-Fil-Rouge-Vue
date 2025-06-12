import axiosClient from '../axios'
import type { Personne } from '../interfaces/Personne'

export const getAllPersonnes = async (): Promise<Personne[]> => {
  const response = await axiosClient.get('/personnes')
  return response.data
}


export const getPersonneById = async (id: number): Promise<Personne> => {
  const response = await axiosClient.get(`/personnes/${id}`)
  return response.data
}

export const createPersonne = async (personne: Partial<Personne>): Promise<Personne> => {
  const response = await axiosClient.post('/personnes', personne)
  return response.data
}

export const updatePersonne = async (id: number, personne: Partial<Personne>): Promise<Personne> => {
  const response = await axiosClient.put(`/personnes/${id}`, personne)
  return response.data
}


export const deletePersonne = async (id: number): Promise<void> => {
  await axiosClient.delete(`/personnes/${id}`)
}