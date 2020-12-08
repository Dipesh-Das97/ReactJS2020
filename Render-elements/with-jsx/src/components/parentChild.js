import React from 'react';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            change : false
        }
    }
    
    userName = {
        data : "Dipesh Das"}

    render(){
        if(this.state.change){
            this.userName.data = "Sahil Das"
        }
        return (
            <div>
            <h1>Hey {this.userName.data} This is the parent</h1>
            <button onClick={() => {this.setState({change : true})}}>Click</button>
            <Child user={this.userName.data}/>
            </div>
        )
    }
}

class Child extends React.Component{
    render(){
        return <h1>Hey {this.props.user} This is the child!</h1>
    }
}

export default Parent;