import React from 'react';
import { Typography, Button } from 'antd';
import './TodoItem.less'

const { Text } = Typography;

function TodoItem ({completed, id, content, handleChangeItem,handleDeleteItem}) {
  return (
    <div className="item-container" onDoubleClick={() => handleChangeItem(id)} style={{cursor: 'pointer'}}>
      <Text delete={completed}>{content}</Text>
      <Button type="primary" icon="delete" onClick={() => handleDeleteItem(id)}></Button>
    </div>
  )
}

export default TodoItem;