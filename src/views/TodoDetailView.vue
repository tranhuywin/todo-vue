<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed, ref } from 'vue'

const { id } = defineProps({
  id: String
})

const GET_TODO_QUERY = gql`
  query GetTodo($id: String!) {
    getTodo(id: $id) {
      title
      description
      status
      createdBy {
        userName
      }
    }
  }
`

const { result, loading, error } = useQuery(GET_TODO_QUERY, { id: id })
const todo = computed(() => result.value?.getTodo || [])
const action = ref('view')
</script>

<template>
  <main class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Todo {{ id }}</h1>
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error loading data</div>
    <div v-else class="bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <p class="text-sm text-gray-500">Created by:</p>
        <h2 class="text-xl font-bold">{{ todo.createdBy.userName }}</h2>
      </div>
      <div class="mb-4">
        <p class="text-sm text-gray-500">Title:</p>
        <h2 class="text-xl font-bold">{{ todo.title }}</h2>
      </div>
      <div class="mb-4">
        <p class="text-sm text-gray-500">Description:</p>
        <p class="text-gray-800">{{ todo.description }}</p>
      </div>
      <div>
        <p class="text-sm text-gray-500">Status:</p>
        <p class="text-gray-800">{{ todo.status }}</p>
      </div>
    </div>
  </main>
</template>