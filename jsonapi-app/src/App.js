import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store-redux/store'
import Posts from './components/Posts'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello Welcome to my Postbook!</h1>
          <Posts />
        </div>
      </Provider>
    )
  }
}


export default App;
