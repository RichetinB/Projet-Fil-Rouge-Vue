<template>

    <div v-if="personnes.length > 0">
      <ul>
        <Personnes
          v-for="personne in personnes"
          :key="personne.id"
          :personne="personne"
        />
      </ul>
    </div>
    <div v-else>
      <p class="text-gray-500">Aucune personne trouvée.</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllPersonnes } from '../../api/Personne'
import type { Personne } from '../../interfaces/Personne'
import Personnes from './List/Personnes.vue'

const personnes = ref<Personne[]>([])

onMounted(async () => {
  try {
    const response = await getAllPersonnes()
    personnes.value = response
  } catch (error) {
    console.error('Erreur lors du chargement des personnes:', error)
  }
})
</script>
