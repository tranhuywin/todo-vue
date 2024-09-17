<script setup lang="ts">
import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
import { ref } from 'vue';

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(
      createTodoInput: $createTodoInput
    ) {
      _id
      title
      description
    }
  }
`

const { mutate: createTodo, onError, onDone } = useMutation(CREATE_TODO_MUTATION)
onError((error) => {
  console.error(error)
})

onDone((result) => {
  alert(`Todo created with id: ${result?.data.createTodo._id}`)
  title.value = ''
  description.value = ''
})

const title = ref('')
const description = ref('')


const onSubmit = async () => {
  const userId = "66eb891fdb162eeb6ee650db"
  createTodo({
    createTodoInput: {
      title: title.value,
      description: description.value,
      userId
    }
  })
}

</script>

<template>
  <main class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Create Todo</h1>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          v-model="title"
          name="title"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <input
          id="description"
          v-model="description"
          name="description"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create
      </button>
    </form>
  </main>
</template>
