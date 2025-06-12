<template>
  <teleport to="body">
    <div class="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        class="bg-white rounded-xl shadow-lg p-6 relative w-full max-w-lg pointer-events-auto"
      >
        <button class="absolute top-2 right-2 text-gray-500" @click="$emit('close')">✖</button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  defineEmits(['close'])
</script>
