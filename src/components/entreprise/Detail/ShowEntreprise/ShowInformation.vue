<template>
  <section v-if="entreprise" class="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto space-y-6">
    <div>
      <h2 class="text-2xl font-bold mb-4">Entreprise : {{ entreprise.nom }}</h2>
      <p><strong>Ville :</strong> {{ entreprise.ville }}</p>
      <p><strong>Code Postal :</strong> {{ entreprise.code_postal }}</p>
      <p><strong>Chiffre d'affaires :</strong> {{ formatChiffreAffaires(entreprise.chiffre_affaires) }}</p>
      <p><strong>Secteur :</strong> {{ entreprise.secteur?.label || 'Non renseigné' }}</p>
    </div>

    <div v-if="entreprise.personnes && entreprise.personnes.length">
      <h3 class="text-xl font-semibold mt-4 mb-2">Personnes associées</h3>
      <ul class="list-disc list-inside space-y-1">
        <li v-for="p in entreprise.personnes" :key="p.id">
          {{ p.nom }} {{ p.prenom }}
        </li>
      </ul>
    </div>

    <div v-else>
      <p class="text-gray-500 italic">Aucune personne associée.</p>
    </div>
  </section>

  <div v-else-if="isLoading">
    <p class="text-gray-400 italic text-center mt-8">Chargement des données de l'entreprise...</p>
  </div>

  <div v-else>
    <p class="text-red-500 text-center mt-8">Impossible de charger l'entreprise.</p>
  </div>
</template>



<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useEntrepriseStore } from '../../../../store/detailEntreprise'

const entrepriseStore = useEntrepriseStore()
const { entreprise } = storeToRefs(entrepriseStore)
// console.log('entreprise', entreprise.value?.secteur?.id)
const isLoading = computed(() => entreprise.value === null)

const formatChiffreAffaires = (value: number | string | null): string => {
  if (value === null) return 'Non renseigné'

  const number = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(number)
}

</script>
