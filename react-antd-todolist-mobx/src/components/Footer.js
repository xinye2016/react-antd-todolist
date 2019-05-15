import React, { Component } from 'react';
import {observer} from 'mobx-react'
import { Button, Input } from 'antd';
import PropTypes from 'prop-types'

@observer
class Footer extends Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  constructor(props) {
    super(props)
    this.state = {
      isAdd: false,
      addTodo: {}
    }
  }

  handleClick () {
    this.setState({
      isAdd: true
    })
  }

  handleChange (e) {
    this.setState({
      addTodo: {
        content: e.target.value,
        id: new Date(),
        completed: false
      }
    })
  }

  handleConfirm () {
    this.context.store.addTodo(this.state.addTodo)
    this.setState({
      isAdd: false
    })
  }

  render () {
    let addBtn = <Button type="primary" onClick={this.handleClick.bind(this)}>新增</Button>
    let addComponent = <div style={{display: 'flex'}}>
                        <Input onChange={e => this.handleChange(e)} style={{marginRight: '10px'}}/>
                        <Button type="primary" onClick={this.handleConfirm.bind(this)}>确认</Button>
                      </div>
    let component = this.state.isAdd ? addComponent : addBtn
    return (
      <div style={{marginTop: '10px'}}>
        {component}
      </div>
    )
  }
}

export default Footer;