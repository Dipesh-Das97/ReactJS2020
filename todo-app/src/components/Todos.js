import React from 'react';
import TodoList from './TodoList'

class Todo extends React.Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoList key={todo.id} todo={todo} handleChange={this.props.handleChange}
            deleteTodo={this.props.deleteTodo}/>
        ))
    }
}

export default Todo;

