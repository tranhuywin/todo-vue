<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <h1 class="text-3xl font-bold mb-2">{{ text }}</h1>
    <RouterLink
      to="/create-todo"
      class="inline-block py-2 px-4 bg-white text-blue-600 font-medium rounded-md shadow-sm hover:bg-gray-100"
    >
      Create Todo
    </RouterLink>
  </header>
</template>