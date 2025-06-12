<template>
  <section class="p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
    <h2 class="text-xl font-semibold mb-4">Créer une personne</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <FormField label="Nom" v-model="form.nom" />
      <FormField label="Prénom" v-model="form.prenom" />
      <FormField label="Email" v-model="form.email" type="email" />
      <FormField label="Téléphone" v-model="form.telephone" type="tel" />

      <FormField label="Civilité" v-model="form.civilite_id" type="select">
        <option v-for="c in civilites" :key="c.id" :value="c.id">{{ c.label }}</option>
      </FormField>

      <FormField label="Entreprise" v-model="form.entreprise_id" type="select">
        <option v-for="e in entreprises" :key="e.id" :value="e.id">{{ e.nom }}</option>
      </FormField>

      <FormField label="Localisation" v-model="form.localisation_id" type="select">
        <option v-for="l in localisations" :key="l.id" :value="l.id">{{ l.name }}</option>
      </FormField>

      <Button color="primary" title="Créer" />
    </form>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Modal from '../../common/Modal.vue'
import Button from '../../common/Button.vue'
import FormField from '../../common/FormField.vue'

import axiosClient from '../../../axios'
import { getCivilite } from '../../../api/Civilite'
import { getAllEntreprises } from '../../../api/Entreprise'
import { getAllLocalisations } from '../../../api/Localisations'
import type { Civilite, Localisation } from '../../../interfaces/Personne'
import { usePersonneStore } from '../../../store/detailPersonne'
import router from '../../../router'
import type { Entreprise } from '../../../interfaces/Entreprise'

const personneStore = usePersonneStore()
const { create } = personneStore
const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  civilite_id: null as number | null,
  entreprise_id: null as number | null,
  localisation_id: null as number | null,
})

const civilites = ref<Civilite[]>([])
const entreprises = ref<Entreprise[]>([])
const localisations = ref<Localisation[]>([])

onMounted(async () => {
  try {
    const [civData, entData, locData] = await Promise.all([
      getCivilite(),
      getAllEntreprises(),
      getAllLocalisations()
    ])

    civilites.value = civData
    entreprises.value = entData
    localisations.value = locData
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error)
  }
})

const handleSubmit = async () => {
  try {
    await create(form.value)
    router.push({ name: 'person.list' })
  } catch (error) {
    console.error('Erreur lors de la création de la personne :', error)
  }
}
</script>
