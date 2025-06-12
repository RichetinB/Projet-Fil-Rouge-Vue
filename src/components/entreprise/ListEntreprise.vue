<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Entreprises
      v-for="entreprise in entreprises"
      :key="entreprise.id"
      :entreprise="entreprise"
    />
  </div>

  <p v-if="entreprises.length === 0" class="text-gray-500 text-center mt-6">
    Aucune entreprise trouvée.
  </p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllEntreprises } from '../../api/Entreprise'
import type { Entreprise } from '../../interfaces/Entreprise'
import Entreprises from './List/Entreprises.vue'

const entreprises = ref<Entreprise[]>([])

onMounted(async () => {
  try {
    entreprises.value = await getAllEntreprises()
  } catch (error) {
    console.error('Erreur lors du chargement des entreprises:', error)
  }
})
</script>
