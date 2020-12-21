import { useState, useEffect } from 'react'

function EffectState(){
    const [ count, changeCount ] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times!`
    })
    return (
        <div>
        <h1>Effects: </h1>
        <p>Count : {count}</p>
        <button onClick={() => {changeCount(count + 1)}}>Click</button>
        </div>
    )
}

export default EffectState;