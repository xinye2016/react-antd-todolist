import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

function Form ({handleSearch}) {
  return  (
    <Search
      placeholder="请输入搜索内容"
      style={{marginBottom: '8px'}}
      onSearch={value => handleSearch(value)}
      enterButton
    />
  )
}

export default Form;