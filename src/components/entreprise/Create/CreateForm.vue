<template>
  <section class="p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
    <h2 class="text-xl font-semibold mb-4">Créer une personne</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <FormField label="Nom" v-model="form.nom" />
      <FormField label="Code Postal" v-model="form.code_postal" />
      <FormField label="Ville" v-model="form.ville" />
      <FormField label="Chiffre d'affaire" v-model="form.chiffre_affaires" />
      <FormField label="Personnes" v-model="form.personnes_ids" type="select" :multiple="true"
>
        <option v-for="p in personnes" :key="p.id" :value="p.id">{{ p.nom }}</option>
      </FormField>

      <FormField label="Secteur d'activité" v-model="form.secteur_id" type="select">
        <option v-for="s in secteurs" :key="s.id" :value="s.id">{{ s.label}}</option>
      </FormField>

      <Button color="primary" title="Créer" />
    </form>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '../../common/Button.vue'
import FormField from '../../common/FormField.vue'


import router from '../../../router'
import type { Personne } from '../../../interfaces/Personne'
import type { Secteur } from '../../../interfaces/Entreprise'
import { getSecteurs } from '../../../api/Secteur'
import { getAllPersonnes } from '../../../api/Personne'
import { useEntrepriseStore } from '../../../store/detailEntreprise'

const entrepriseStore = useEntrepriseStore()
const { create } = entrepriseStore
const form = ref({
  nom: '',
  code_postal: '',
  ville: '',
  chiffre_affaires: null as number | null,
  secteur_id: null as number | null,
personnes_ids: [] as number[],})

const personnes = ref<Personne[]>([])
const secteurs = ref<Secteur[]>([])


onMounted(async () => {
  try {
    const [secteurData, persoData] = await Promise.all([
        getSecteurs(),
        getAllPersonnes()
    ])

    console.log('Secteurs recup:', secteurData)
    secteurs.value = secteurData
    console.log('Secteurs:', secteurs.value)
    personnes.value = persoData

  } catch (error) {
    console.error('Erreur lors du chargement des données :', error)
  }
})

const handleSubmit = async () => {
  try {
    await create(form.value)
    router.push({ name: 'entreprise.list' })
  } catch (error) {
    console.error('Erreur lors de la création de la personne :', error)
  }
}
</script>
