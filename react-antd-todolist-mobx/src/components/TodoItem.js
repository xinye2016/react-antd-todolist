import React from 'react';
import { Typography, Button } from 'antd';
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'
import './TodoItem.less'

const { Text } = Typography;

@observer
class TodoItem extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render () {
    let { content, isComplete, id } = this.props
    let { completeTodo, deleteTodo } = this.context.store
    return (
      <div className="item-container" onDoubleClick={() => completeTodo(id)} style={{cursor: 'pointer'}}>
        <Text delete={isComplete}>{content}</Text>
        <Button type="primary" icon="delete" onClick={() => deleteTodo(id)}></Button>
      </div>
    )
  }
}

export default TodoItem;