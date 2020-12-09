//import React from 'react';
import ReactDOM from 'react-dom'
//import Like from './states/like'
//import Parent from './components/parentChild'
//import App1 from './components/functionComp'
//import App2 from './components/classComp'
import Methods from './lifecycle/methods'

//1. Passing values using props to the children
/*const companyName = {
  name : "Full Creative"
}
const funElement = <App1 name="Dipesh Das" company={companyName.name}/> */
//2. Composition in function components
/*const companyName = {
  name : "Full Creative"
}
function FuncContainer(){
  return (
    <div>
    <App1 name="Dipesh Das" company={companyName.name} />
    <App1 name="Venkatesh Velan" company={companyName.name} />
    <App1 name="Priyadarshini" company={companyName.name} />
    </div>
  )
}  */

//3. Composition in function components
/*const companyName = {
  name : "Full Creative"
}
class ClassContainer extends React.Component{
  render(){
    return (
      <div>
      <App2 name="Dipesh Das" company={companyName.name} />
      <App2 name="Venkatesh Velan" company={companyName.name} />
      <App2 name="Priyadarshini" company={companyName.name} />
      </div>
    )
  }
}
*/
<<<<<<< HEAD
ReactDOM.render(<Methods fav={"yellow"}/>, document.getElementById('root'));
=======
ReactDOM.render(<Methods fav={"yellow"}/>, document.getElementById('root'));
>>>>>>> 51cb3829a7ad619ad697f377cc290186d13f200e
