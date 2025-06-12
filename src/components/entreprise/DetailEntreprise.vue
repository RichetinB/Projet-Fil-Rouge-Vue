<script setup lang="ts">
import Button from '../common/Button.vue';
import UpdateForm from '../entreprise/Detail/UpdateForm.vue';
import DeleteEntreprise from './Detail/DeleteEntreprise.vue';
import InfoEntreprise from './Detail/InfoEntreprise.vue';
import { ref } from 'vue';
const showForm = ref(false);
</script>

<template>
    <div>
        <InfoEntreprise />
        <Button title="Modifier la personne" color="primary" @click="showForm = true" />
        <UpdateForm v-if="showForm" @close="showForm = false" />
        <DeleteEntreprise />

    </div>
</template>