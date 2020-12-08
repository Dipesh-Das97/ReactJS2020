import React from 'react';

let count = 0;
class Like extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked : false 
        }
    }
    render(){ 
        if(this.state.liked){
            count = count + 1;
            this.setState({liked : false})
        }
        return (
            <div>
            <h1>Please hit likes</h1>
            <button onClick={() =>{this.setState({liked : true})}}>Like</button>
            <p>Count = {count}</p>
            </div>
        )
    }
}

export default Like;