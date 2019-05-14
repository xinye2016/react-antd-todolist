import {connect} from 'react-redux'
import FormComponent from '../components/Form'
import {searchTodo} from '../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: text => dispatch(searchTodo(text))
  }
}

const FormContainer = connect(null, mapDispatchToProps)(FormComponent)

export default FormContainer