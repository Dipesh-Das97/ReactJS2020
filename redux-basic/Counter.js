import React, {Component} from 'react'
import { connect } from 'react-redux';

class Counter extends Component{
  increment = () =>{
    this.props.dispatch({type : "Increment"})
  }
  decrement = () =>{
    this.props.dispatch({type : "Decrement"})
  }
  render(){
    return (
      <div>
      Count : {this.props.count}
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    count : state.count
})

export default connect(mapStateToProps)(Counter);

//For App

//Example for a counter
/*const initState = {
  count : 4
}
const store = configureStore({reducer : countReducer});
function countReducer(state = initState, action){
  //alert(action)
  if(action.type === "Increment"){
    return {
      count : state.count + 1
    }
  }
  if(action.type === "Decrement"){
    return {
      count : state.count - 1
    }
  }
  return state;
}
class App extends Component{
  render(){
    return (
      <div>
      <Counter store={store}/>
      </div>
    )
  }
}
*/
