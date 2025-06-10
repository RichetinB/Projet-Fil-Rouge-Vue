<template>
    <div>
        <header class="bg-gray-800 text-white p-4">
            <h1 class="text-2xl">Mon Application</h1>
        </header>
        <main class="p-4">
            <slot></slot>
        </main>
        <footer class="bg-gray-800 text-white p-4 mt-4">
            <p>&copy; 2023 Mon Application</p>
        </footer>
    </div>
</template>