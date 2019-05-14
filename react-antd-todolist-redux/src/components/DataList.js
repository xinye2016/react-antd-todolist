import React from 'react';
import TodoItem from '../containers/TodoItem'
import { List } from 'antd';

function DataList ({list}) {
  return (
    <List
      bordered
      dataSource={list}
      renderItem={item => (
          <List.Item>
            <TodoItem {...item}/>
          </List.Item>
      )}
    />
  )
}

export default DataList;