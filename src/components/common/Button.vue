<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      baseColors[color],
    ]"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

const baseColors: Record<Color, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  warning: 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-300',
  info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
  light: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-200',
  dark: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700',
}

defineProps<{
  title: string,
  color: Color
}>()
</script>
