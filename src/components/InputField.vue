<script setup lang="ts">
defineProps(['labelText', 'inputId', 'inputName'])

</script>
<template>
  <div>
    <label for="title" class="block text-sm font-medium text-gray-700">{{ labelText }}</label>
    <input
      :id="inputId"
      :name="inputName"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</template>