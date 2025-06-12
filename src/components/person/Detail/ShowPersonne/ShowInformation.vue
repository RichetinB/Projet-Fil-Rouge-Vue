<template>
  
  <div v-if="personne" class="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto space-y-6">
    <div class="space-y-2">
      <h2 class="text-xl font-bold">Détails de {{ personne.nom }} {{ personne.prenom }}</h2>
      <p><strong>Civilité :</strong> {{ personne.civilite?.label }}</p>
      <p><strong>Email :</strong> {{ personne.email }}</p>
      <p><strong>Téléphone :</strong> {{ personne.telephone || 'N/A' }}</p>
      <p><strong>Entreprise :</strong> {{ personne.entreprise?.nom || 'Non renseignée' }}</p>
      <p><strong>Ville :</strong> {{ personne.localisation?.name || 'Non renseignée' }}</p>
    </div>
  </div>
  
  <div v-else-if="isLoading">
    <p class="text-gray-400 italic">Chargement des informations...</p>
  </div>

  <div v-else>
    <p class="text-red-500">Impossible de charger la personne.</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { usePersonneStore } from '../../../../store/detailPersonne'

const personneStore = usePersonneStore()
const { personne } = storeToRefs(personneStore)

const isLoading = computed(() => personne.value === null)
</script>
