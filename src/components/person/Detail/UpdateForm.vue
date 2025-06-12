<template>
  <Modal @close="$emit('close')">
    <form @submit.prevent="handleSubmit">
      <FormField label="Nom" v-model="form.nom" />
      <FormField label="Prénom" v-model="form.prenom" />
      <FormField label="Email" v-model="form.email" type="email" />
      <FormField label="Téléphone" v-model="form.telephone" type="tel" />

      <FormField label="Civilité" v-model="form.civilite_id" type="select">
      <option v-for="c in civilite" :key="c.id" :value="c.id">{{ c.label }}</option>
      </FormField>
      <FormField label="Entreprise" v-model="form.entreprise_id" type="select">
      <option v-for="e in entreprises" :key="e.id" :value="e.id">{{ e.nom }}</option>
      </FormField>
      <FormField label="Localisation" v-model="form.localisation_id" type="select">
      <option v-for="l in localisations" :key="l.id" :value="l.id">{{ l.name }}</option>
      </FormField>



      <Button color="primary" title="Mettre à jour" />
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Modal from '../../common/Modal.vue'
import Button from '../../common/Button.vue'
import FormField from '../../common/FormField.vue'

import { useRoute } from 'vue-router'
import { usePersonneStore } from '../../../store/detailPersonne'
import { storeToRefs } from 'pinia'
import { getCivilite } from '../../../api/Civilite'
import type { Civilite, Localisation } from '../../../interfaces/Personne'
import { getAllEntreprises } from '../../../api/Entreprise'
import { getAllLocalisations } from '../../../api/Localisations'
import type { Entreprise } from '../../../interfaces/Entreprise'

const route = useRoute()
const personneStore = usePersonneStore()
const { personne } = storeToRefs(personneStore)
const { update } = personneStore

const emit = defineEmits(['close'])

const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  civilite_id: null as number | null,
  entreprise_id: null as number | null,
  localisation_id: null as number | null,
})

const civilite = ref<Civilite[]>([])
const entreprises = ref<Entreprise[]>([])
const localisations = ref<Localisation[]>([])

const idParam = route.params.id
const id = Array.isArray(idParam) ? parseInt(idParam[0]) : parseInt(idParam ?? '')

onMounted(async () => {
  if (isNaN(id)) {
    console.error('ID invalide')
    return
  }

  try {
    const [dataCivilite, dataEntreprise, dataLocalisation] = await Promise.all([
      getCivilite(),
      getAllEntreprises(),
      getAllLocalisations(),
    ])  

    civilite.value = dataCivilite
    entreprises.value = dataEntreprise
    localisations.value = dataLocalisation
  } catch (error) {
    console.error('Erreur lors du chargement des civilités :', error)
  }

  if (personne.value) {
    form.value = {
      nom: personne.value.nom || '',
      prenom: personne.value.prenom || '',
      email: personne.value.email || '',
      telephone: personne.value.telephone || '',
      civilite_id: personne.value.civilite?.id ?? null,
      entreprise_id: personne.value.entreprise?.id ?? null,
      localisation_id: personne.value.localisation?.id ?? null
    }
  }
})

const handleSubmit = async () => {
  await update(id, form.value)
  emit('close')
}
</script>
