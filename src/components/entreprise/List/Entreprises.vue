<template>
  <div
    class="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
    @click="goToDetails(entreprise.id)"
  >
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-lg font-bold text-gray-800">{{ entreprise.nom }}</h2>
      <span class="text-sm text-gray-500">#{{ entreprise.id }}</span>
    </div>

    <p class="text-sm text-gray-600">📍 {{ entreprise.ville }} ({{ entreprise.code_postal }})</p>
    <p class="text-sm text-gray-600">💶 {{ formatCA(entreprise.chiffre_affaires) }}</p>


  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Entreprise } from '../../../interfaces/Entreprise';

const router = useRouter()

defineProps<{
  entreprise: Entreprise
}>()

function goToDetails(id: number) {
  router.push(`/entreprise/${id}`)
}

function formatCA(value: number | null): string {
  if (value === null) return 'Non renseigné'
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(value)
}
</script>
