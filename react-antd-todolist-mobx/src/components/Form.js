import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types'
import { Input } from 'antd';

const Search = Input.Search;

@observer
class Form extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render () {
    const {searchTodo} = this.context.store
    return (
      <Search
        placeholder="请输入搜索内容"
        style={{marginBottom: '8px'}}
        onSearch={value => searchTodo(value)}
        enterButton
      />
    )
  }
}

export default Form;