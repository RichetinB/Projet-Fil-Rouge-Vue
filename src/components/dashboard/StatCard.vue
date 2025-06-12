<template>
  <div class="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
    <div class="text-4xl">{{ emoji }}</div>
    <div>
      <p class="text-lg font-semibold text-gray-700">{{ title }}</p>
      <p class="text-2xl font-bold text-indigo-600">{{ count }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  count: number
  emoji: string
}>()
</script>
