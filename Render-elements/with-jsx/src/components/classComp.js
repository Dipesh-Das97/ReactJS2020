import React from 'react';

class App2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, Mr.{this.props.name}</h1>
                <p>Welcome to {this.props.company}</p>
                <p>This is a function component</p>
            </div>
        )
    }
}

export default App2;