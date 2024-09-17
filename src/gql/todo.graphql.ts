import gql from 'graphql-tag'

export const GET_TODO_LIST_QUERY = gql`
  query getTodoList($getTodoListInput: GetTodoListInput!) {
    getTodoList(getTodoListInput: $getTodoListInput) {
      _id
      title
      description
    }
  }
`