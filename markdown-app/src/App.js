import React from 'react';
import ReactMarkdown from 'react-markdown'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    }
    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.value} />
                <textarea value={this.state.value} 
                onChange={(event)=>this.setState({value: event.target.value})} />
            </div>
        )
    }    
}
