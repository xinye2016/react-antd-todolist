import React, { Component } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import {connect} from 'react-redux'
import {addTodo} from '../store/actions'

class AddTodoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdd: false,
      todo: {}
    }
  }

  changeAdd () {
    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  handleChange (e) {
    this.setState({
      todo: {
        id: new Date(),
        content: e.target.value,
        completed: false
      }
    })
  }

  handleConfirm () {
    this.props.confirmAdd(this.state.todo)
    this.setState({
      isAdd: !this.state.isAdd,
      todo: {}
    })
  }

  render () {
    let addBtn = <Button type="primary" onClick={() => this.changeAdd()}>新增</Button>
    let addComponent = <div style={{display: 'flex'}}>
                        <Input onChange={e => this.handleChange(e)} style={{marginRight: '10px'}}/>
                        <Button type="primary" onClick={() => this.handleConfirm()}>确认</Button>
                      </div>
    let component = this.state.isAdd ? addComponent : addBtn
    return (
      <div style={{marginTop: '10px'}}>
        {component}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    confirmAdd: todo => {
      dispatch(addTodo(todo))
    }
  }
}

const Footer = connect(null, mapDispatchToProps)(AddTodoComponent)

export default Footer;