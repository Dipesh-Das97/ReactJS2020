import React from 'react';

class TodoList extends React.Component{
    getStyle = () =>{
        /*if(this.props.todo.completed){
            return {backgroundColor: '#00ffff',
            textDecoration : 'line-through'}
        }
        else{
            return {backgroundColor: '#008000'}
        }*/
        return {
            backgroundColor : this.props.todo.completed? "#00ffff" : "#008000",
            textDecoration : this.props.todo.completed? "line-through" : "none"}
    }
    render(){
        const { id, task } = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p><input type='checkBox' onChange={this.props.handleChange.bind(this, id)}/>{' '}{id}{' '}{task}
            <button onClick={this.props.deleteTodo.bind(this, id)} style={{float : "right", backgroundColor: "#ff0000"}}>Delete</button></p>
            </div>
        )
    }
}


export default TodoList;
