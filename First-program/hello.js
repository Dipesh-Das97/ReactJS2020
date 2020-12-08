//Without JSX
const greetings = "Hello World!"

const name = {
    firstName :"Dipesh",
    lastName :"Das"
};
function user(name) {
    return `Welcome Mr. ${name.firstName}`
}


const component1 = React.createElement('h1', {}, "This is a header");
const component2 = React.createElement('h3', {}, `${greetings} ${user(name)}!`);
const component3 = React.createElement('p', {}, "This is a paragraph");

const container = React.createElement('div', {}, [component1,component2,component3]);

ReactDOM.render(container, document.getElementById('root'));