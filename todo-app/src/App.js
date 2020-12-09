import React, { Component } from 'react';
import Todo from './components/Todos'
import AddTodo from './components/AddTodoField'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        /*{
          id: 1,
          task: "Do laundry",
          completed: false
        },
        {
          id: 2,
          task: "Get to gym",
          completed: false
        },
        {
          id: 3,
          task: "Cook Dinner",
          completed: false
        },
        {
          id: 4,
          task: "Have dinner with fam",
          completed: false
        }*/
      ]
    }
  }

  handleChange = (id) => {
    //alert(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id
      )]
    })
  }

  addTodo = (task) => {
   // alert(task)
   const newTodo = {
     id : this.state.todos.length + 1,
     task : task,
     completed : false
   }
   this.setState({ todos : [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <h1 style={{textAlign: 'center',
      background: '#333'}}>Welcome to my Todo App</h1>
        <p>Please enter your todos:</p>
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={this.state.todos} handleChange={this.handleChange}
          deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;