function tick() {
    const element1 = React.createElement('h1', {}, "This is a header");
    const element2 = React.createElement('p', {}, `This element is updating ${new Date().toLocaleTimeString()}`);
    return ReactDOM.render(React.createElement('div', {}, [element1, element2]),
        document.getElementById('root'));
}

setInterval(tick, 1000)