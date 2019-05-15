import React from 'react';
import TodoListApp from './components/TodoListApp'
import store from './store'
import {Provider} from 'react-redux'
import {addTodo} from './store/actions'

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo({id:4, content: 'nihao', completed: false}))


function App() {
  return (
    <Provider store={store}>
      <TodoListApp></TodoListApp>
    </Provider>
  );
}

export default App;
