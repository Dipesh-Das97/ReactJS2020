import React from 'react';

class Methods extends React.Component {
    //1. 
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }
    //2.
    /*static getDerivedStateFromProps(props, state) {
        return { color: props.fav }
    }*/
    //3.
    render() {
        return (
            <div>
                <h1>Hello, {this.state.color} is my favorite color</h1>
                <div id="mydiv"></div>
                <div id="mydiv2"></div>
            </div>
        )
    }
    //<button onClick={this.colorChange}>Click</button>
    //4.
    componentDidMount(){
        setInterval(() => {this.setState({color : 'blue'})},5000)
    }
    //for Update on button click step 5.
    /*colorChange = () => {
        this.setState({ color: "blue" })
    }*/
    //6.
    /*shouldComponentUpdate() {
        return false;
    }*/
    //8. to showcase use componentDidMount and componentWillUpdate()
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        document.getElementById('mydiv2').innerHTML = `${prevState.color} is from snapShot updated color`
    }
    //9.
    componentDidUpdate = () => {
        document.getElementById('mydiv').innerHTML = `${this.state.color} is my updated color`
    }
}

export default Methods;