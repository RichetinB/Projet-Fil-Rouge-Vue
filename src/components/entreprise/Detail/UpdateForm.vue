<template>
  <Modal @close="$emit('close')">

    <form @submit.prevent="handleSubmit">
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

      <Button color="primary" title="Mettre à jour" />
    </form>
  </Modal>
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
import Modal from '../../common/Modal.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'


const route = useRoute()

const entrepriseStore = useEntrepriseStore()
const { entreprise } = storeToRefs(entrepriseStore)
const { update } = entrepriseStore

const emit = defineEmits(['close'])

const form = ref({
  nom: '',
  code_postal: '',
  ville: '',
  chiffre_affaires: null as number | null,
  secteur_id: null as number | null,
  personnes_ids: [] as number[],
})

const personnes = ref<Personne[]>([])
const secteurs = ref<Secteur[]>([])

const idParam = route.params.id
const id = Array.isArray(idParam) ? parseInt(idParam[0]) : parseInt(idParam ?? '')

onMounted(async () => {
  try {
    const [secteurData, persoData] = await Promise.all([
        getSecteurs(),
        getAllPersonnes()
    ])

    secteurs.value = secteurData
    personnes.value = persoData

  } catch (error) {
    console.error('Erreur lors du chargement des données :', error)
  }

  if (entreprise.value) {
    form.value = {
      nom: entreprise.value.nom,
      code_postal: entreprise.value.code_postal,
      ville: entreprise.value.ville,
      chiffre_affaires: entreprise.value.chiffre_affaires,
      secteur_id: entreprise.value.secteur_id,
      personnes_ids: entreprise.value.personnes?.map(p => p.id) || [],
    }
  }
})

const handleSubmit = async () => {
    await update(id,form.value)
     emit('close')
}
</script>
