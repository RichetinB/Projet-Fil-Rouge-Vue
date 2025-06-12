<template>
  <li
    class="mb-2 cursor-pointer text-blue-600 hover:underline"
    @click="goToDetails(personne.id)"
  >
    • {{ personne.civilite?.label }} {{ personne.nom }} {{ personne.prenom }}
  </li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Personne } from '../../../interfaces/Personne';

const router = useRouter()

defineProps<{
  personne: Personne
}>()

function goToDetails(id: number) {
  router.push(`/personne/${id}`)
}
</script>
