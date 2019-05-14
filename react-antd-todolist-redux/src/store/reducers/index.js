import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, SEARCH_TODO} from '../constants'
import list from '../../data'

const todoReducer = (state = list, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case DELETE_TODO: 
      return state.filter(item => {
        return item.id !== action.id
      })
    case COMPLETE_TODO:
      return state.map(item => {
        let obj = action.id === item.id ? {...item, completed: !item.completed} : item
        return obj
      })
    case SEARCH_TODO:
      if (action.text === '') {
        return list
      } else {
        return state.filter(item => {
          return item.content.indexOf(action.text) !== -1
        })
      }
    default:  
      return state
  }
}

export default todoReducer