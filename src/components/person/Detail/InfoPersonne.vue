<template>

  <div >
    <ul>
      <ShowInformation />
    </ul>
  </div>


</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getPersonneById } from '../../../api/Personne'
import type { Personne } from '../../../interfaces/Personne'
import ShowInformation from './ShowPersonne/ShowInformation.vue'
import { usePersonneStore } from '../../../store/detailPersonne'


const route = useRoute()
const {personne, fetchPersonne} = usePersonneStore()
onMounted(async () => {
  const idParam = route.params.id
  const id = Array.isArray(idParam) ? parseInt(idParam[0]) : parseInt(idParam ?? '')
  if (isNaN(id)) {
    console.error('ID invalide')
    return
  }

  try {
    await fetchPersonne(id)

  } catch (error) {
    console.error('Erreur lors du chargement des détails de la personne :', error)
  }
})
</script>
