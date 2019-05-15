import React from 'react';
import {observer} from 'mobx-react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import { List } from 'antd';

@observer
class DataList extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };
  render () {
    const {todos} = this.context.store
    return (
      <List
        bordered
        dataSource={todos}
        renderItem={item => (
            <List.Item>
              <TodoItem {...item}/>
            </List.Item>
        )}
      />
    )
  }
}

export default DataList;