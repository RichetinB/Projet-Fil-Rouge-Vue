<template>
  <div class="p-8 space-y-6">
    <h1 class="text-3xl font-bold text-gray-800">👋 Bonjour, bienvenue sur le tableau de bord</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard title="Personnes" :count="personnes.length" emoji="🧑‍💼" />
      <StatCard title="Entreprises" :count="entreprises.length" emoji="🏢" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllPersonnes } from '../api/Personne'
import { getAllEntreprises } from '../api/Entreprise'
import type { Personne } from '../interfaces/Personne'
import type { Entreprise } from '../interfaces/Entreprise'
import StatCard from '../components/dashboard/StatCard.vue'

const personnes = ref<Personne[]>([])
const entreprises = ref<Entreprise[]>([])

onMounted(async () => {
  personnes.value = await getAllPersonnes()
  entreprises.value = await getAllEntreprises()
})
</script>
