import React from 'react'
import { Layout } from 'antd';
import Form from '../containers/Form'
import DataList from '../containers/DataList'
import Footer from '../containers/Footer'
import './todolist.less'

const { Header, Content} = Layout;

function TodoListApp() {
  return (
    <Layout className="todolist-layout">
      <Header>
        <h3 className="logo">TodoList</h3>
      </Header>
      <Content className="todolist-content">
        <Form />
        <DataList />
        <Footer />
      </Content>
    </Layout>
  )
}

export default TodoListApp