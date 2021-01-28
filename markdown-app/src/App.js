import React from 'react';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
                <ReactMarkdown>### This is my Markdown application</ReactMarkdown>
                <textarea placeholder="Enter some text here" 
                spellcheck="true"
                rows="10" cols="50"
                value={this.state.value} 
                onChange={(event)=>this.setState({value: event.target.value})} />
                <ReactMarkdown source={this.state.value}
                renderers={{code:Component}}/>
            </div>
        )
    }    
}

const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};