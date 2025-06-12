<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-900 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-semibold">📇 Annuaire App</h1>
        <nav class="flex gap-6 text-sm">
          <RouterLink to="/" class="hover:text-gray-300 transition">🏠 Dashboard</RouterLink>
          <RouterLink to="/personne" class="hover:text-gray-300 transition">👥 Liste des personnes</RouterLink>
          <RouterLink to="/personne/create" class="hover:text-gray-300 transition">➕ Nouvelle personne</RouterLink>
          <RouterLink to="/entreprise" class="hover:text-gray-300 transition">🏢 Liste des Entreprises</RouterLink>
          <RouterLink to="/entreprise/create" class="hover:text-gray-300 transition">➕ Nouvelle Entreprise</RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-1 container mx-auto p-6">
      <slot />
    </main>

    <footer class="bg-gray-900 text-gray-400 text-center text-sm p-4">
      &copy; 2025 Mon Application. Tous droits réservés.
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
