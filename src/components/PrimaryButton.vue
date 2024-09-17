<script setup lang="ts">
defineProps<{
  text: string,
  onClick: (payload: MouseEvent) => void,
}>()
</script>

<template>
  <button @click="onClick" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
    {{ text }}
  </button>
</template>