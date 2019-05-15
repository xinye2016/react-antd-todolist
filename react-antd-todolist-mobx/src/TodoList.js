import React from 'react'
import {observer} from 'mobx-react'
import { Layout } from 'antd';
import Form from './components/Form'
import DataList from './components/DataList'
import Footer from './components/Footer'
import './todolist.less'
import store from './store'
import Provider from './components/Provider'

const { Header, Content} = Layout;

const TodoListApp = observer(() => {
  return (
   <Provider store={store}>
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
   </Provider>
  )
})

export default TodoListApp