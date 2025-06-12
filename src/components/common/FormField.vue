<template>
  <div class="mb-4">
    <label class="block mb-1 font-semibold">{{ label }}</label>

    <input
      v-if="type !== 'select'"
      v-model="model"
      class="input"
      :type="type"
    />

    <select
      v-else
      v-model="model"
      class="input"
      :multiple="props.multiple"

    >
      <slot />
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  type?: string
  multiple?: boolean
}>()

const model = defineModel<string | number | (string | number)[] | null>()
</script>
