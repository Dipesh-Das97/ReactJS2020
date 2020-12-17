import React from 'react';
import { connect } from 'react-redux';

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
        e.preventDefault()
        this.props.dispatch({type:"ADD_TODO", payload:this.state.task});
        this.setState({task : ''})
    }

    render() {
        return (
            <form>
                <input type="text" name='task' onChange={this.onChange}
                value={this.state.task} placeholder="Enter Todo Here...."></input>
                <input type="submit" value="Add"
                onClick={this.onSubmit}></input>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    todos : state.todos
})

export default connect(mapStateToProps)(AddTodo);