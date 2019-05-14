import {connect} from 'react-redux'
import TodoListComponent from '../components/DataList'

const mapStateToProps = state => {
  return {
    list: state
  }
}

const todoListContainer = connect(mapStateToProps)(TodoListComponent)

export default todoListContainer