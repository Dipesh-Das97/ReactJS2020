import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList'

class Todo extends React.Component{
    handleChange = (id) => {
        this.props.dispatch({type: "HANDLE_CHANGE", payload : id});
    }
    deleteTodo = (id) => {
        this.props.dispatch({type: "DELETE_TODO", payload : id});
    }
    render(){
        return this.props.todos.map((todo) => (
            <TodoList key={todo.id} todo={todo} handleChange={this.handleChange}
            deleteTodo={this.deleteTodo}/>
        ))
    }
}

const mapStateToProps = state => ({
    todos : state.todos
})

export default connect(mapStateToProps)(Todo);
