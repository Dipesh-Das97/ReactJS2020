import React from 'react';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task : ''
        }
    }

    onChange = (e) =>{
        this.setState({
            task : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({task : ''})
    }

    render() {
        return (
            <form>
                <input type="text" name='task' onChange={this.onChange}
                value={this.state.title} placeholder="Enter Todo Here...."></input>
                <input type="submit" value="Add"
                onClick={this.onSubmit}></input>
            </form>
        )
    }
}

export default AddTodo;