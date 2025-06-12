<template>
    <div>
        <Button color="danger" title="Supprimer l'entreprise !" @click="handleDelete"/>

    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import Button from '../../common/Button.vue'
import { deleteEntreprise } from '../../../api/Entreprise'

const route = useRoute()
const router = useRouter()
const isDeleting = ref(false)

const handleDelete = async () => {
    const idParam = route.params.id
    const id = Array.isArray(idParam) ? parseInt(idParam[0]) : parseInt(idParam ?? '')

    if (isNaN(id)) {
        console.error('Id Invalide', idParam)
        return
    }

    isDeleting.value = true
    try {
        await deleteEntreprise(id)
        router.push('/entreprise')
    } catch (error) {
        console.error('Erreur lors de la suppression de la personne', error)
    } finally {
        isDeleting.value = false
    }

    
}

</script>
