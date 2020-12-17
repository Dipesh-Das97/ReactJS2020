import React, { Component } from 'react';
import Todo from './components/Todo'
import AddTodos from './components/AddTodos';
import { Provider } from 'react-redux';
import store from './store-redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1 style={{
            textAlign: 'center',
            background: '#333'
          }}>Welcome to my Todo App</h1>
          <p>Please enter your todos:</p>
          <AddTodos />
          <Todo />
        </div>
      </Provider>
    )
  }
}

export default App;
