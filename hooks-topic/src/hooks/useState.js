import React , { useState } from 'react';

function State(){
    const [count, changeCount] = useState(0);
    return (
        <div>
            <h1> Count : {count}</h1>
            <button onClick={() => {changeCount(count + 1)}}>Click</button>
        </div>
    )
}

export default State;