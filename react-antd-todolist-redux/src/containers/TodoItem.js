import {connect} from 'react-redux'
import TodoItemComponent from '../components/TodoItem'
import {completeTodo, deleteTodo} from '../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    handleChangeItem: id => {
      dispatch(completeTodo(id))
    },
    handleDeleteItem: id => {
      dispatch(deleteTodo(id))
    }
  }
}
const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItemComponent)

export default TodoItemContainer