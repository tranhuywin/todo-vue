<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { computed, ref } from 'vue'

import AppHeader from '@/components/AppHeader.vue';
import { GET_TODO_LIST_QUERY } from '@/gql/todo.graphql';

const page = ref(1)
const limit = ref(10)

const { result, loading, error, fetchMore } = useQuery(GET_TODO_LIST_QUERY, {
  getTodoListInput: {
    page: page.value,
    limit: limit.value
  }
})

const todoList = computed(() => result.value?.getTodoList || [])

</script>

<template>
  <main class="container mx-auto p-4">
    <AppHeader text="Todo List" class="mb-8" />
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error loading data</div>
    <ul v-else class="space-y-4">
      <li v-for="{ title, description, _id } in todoList" :key="title" class="bg-white shadow-md rounded-lg p-4">
        <router-link :to="{ name: 'todo', params: { id: _id } }" class="block">
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <p class="text-gray-600">{{ description }}</p>
        </router-link>
      </li>
    </ul>
    <div class="flex justify-center space-x-4 mt-4">
      <button @click="page--" :disabled="page === 1" class="bg-gray-200 px-4 py-2 rounded-lg">Previous</button>
      <button @click="page++" class="bg-gray-200 px-4 py-2 rounded-lg">Next</button>
    </div>
  </main>
</template>
