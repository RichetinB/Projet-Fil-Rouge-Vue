
<template>
    <div>

        <InfoPersonne/>
        <Button title="Modifier la personne" color="primary" @click="showForm = true" />
        <UpdateForm v-if="showForm" @close="showForm = false" />
        <DeletePersonne/>
    </div>
</template>
<script setup lang="ts">
import Button from '../common/Button.vue';
import DeletePersonne from './Detail/DeletePersonne.vue';
import InfoPersonne from './Detail/InfoPersonne.vue';
import UpdateForm from './Detail/UpdateForm.vue';

import { ref } from 'vue';
const showForm = ref(false);
</script>