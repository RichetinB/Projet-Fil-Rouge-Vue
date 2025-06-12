import { defineStore } from "pinia";
import { ref } from "vue";
import type { Entreprise } from "../interfaces/Entreprise";
import { createEntreprise, getEntrepriseById, updateEntreprise } from "../api/Entreprise";

export const useEntrepriseStore = defineStore('entreprise', () => {
    const entreprise = ref<Entreprise | null>(null)

    const fetchEntreprise = async (id: number) => {
        const data = await getEntrepriseById(id);
        entreprise.value = data;
    }

    const update = async (id: number, payload: Partial<Entreprise>) => {
        const updated = await updateEntreprise(id, payload);
        entreprise.value = updated;
    }

    const create = async (payload: Partial<Entreprise>) => {
        const created = await createEntreprise(payload);
        entreprise.value = created;
    }

    return {
        entreprise,
        fetchEntreprise,
        update,
        create
    }

})