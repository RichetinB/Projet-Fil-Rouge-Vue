import { defineStore } from "pinia";
import type { Personne } from "../interfaces/Personne";
import { createPersonne, getPersonneById, updatePersonne } from "../api/Personne";
import { ref } from "vue";

export const usePersonneStore = defineStore('personne', () => {
    
    const personne = ref<Personne | null>(null)

    const fetchPersonne = async (id: number) => {
        const data = await getPersonneById(id)
        personne.value = data
    }

    const update = async (id: number, payload: Partial<Personne>) => {
        const updated = await updatePersonne(id, payload)
        personne.value = updated
    }

    const create = async (payload: Partial<Personne>) => {
        const created = await createPersonne(payload)
        personne.value = created
    }

  return { personne, fetchPersonne, update, create }
})
