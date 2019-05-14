import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, SEARCH_TODO} from '../constants'

export function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function deleteTodo (id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function completeTodo (id) {
  return {
    type: COMPLETE_TODO,
    id
  }
}

export function searchTodo (text) {
  return {
    type: SEARCH_TODO,
    text
  }
}