import React from 'react';
import TodoListApp from './components/TodoListApp'
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <TodoListApp></TodoListApp>
    </Provider>
  );
}

export default App;
