<script setup lang="ts">
import DetailPersonne from '../../components/person/DetailPersonne.vue';

</script>


<template>
  <DetailPersonne />
</template>
<!-- <template>

  <div v-if="personne">
    <h2 class="text-xl font-bold mb-4">Détails de {{ personne.nom }} {{ personne.prenom }}</h2>
    <p><strong>Civilité:</strong> {{ personne.civilite?.label }}</p>
    <p><strong>Email:</strong> {{ personne.email }}</p>
    <p><strong>Téléphone:</strong> {{ personne.telephone || 'N/A' }}</p>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../../axios';
import type { Personne } from '../../interfaces/Personne';
import { getPersonneById } from '../../api/Personne';
import Button from '../../components/common/Button.vue';

const route = useRoute();
const personne = ref<Personne | null>(null);

onMounted(async () => {
  const idParam = route.params.id;

  const id = Array.isArray(idParam) ? parseInt(idParam[0]) : parseInt(idParam ?? '');
  if (isNaN(id)) {
    console.error('ID invalide');
    return;
  }  try {
    const response = await getPersonneById(id);
    personne.value = response;
  } catch (error) {
    console.error('Erreur lors du chargement des détails de la personne:', error);
  }
});


</script> -->
