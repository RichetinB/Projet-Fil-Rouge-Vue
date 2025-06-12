<template>
    <div>
        <ShowInformation />
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

import ShowInformation from './ShowEntreprise/ShowInformation.vue'
import { useEntrepriseStore } from '../../../store/detailEntreprise'


const route = useRoute()
const {entreprise, fetchEntreprise} = useEntrepriseStore()
onMounted(async () => {
  const idParam = route.params.id
  const id = Array.isArray(idParam) ? parseInt(idParam[0]) : parseInt(idParam ?? '')
  if (isNaN(id)) {
    console.error('ID invalide')
    return
  }

  try {
    await fetchEntreprise(id)

  } catch (error) {
    console.error(`Erreur lors du chargement des détails de l'entreprise :`, error)
  }
})
</script>
