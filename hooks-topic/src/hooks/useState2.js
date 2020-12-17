import React , { useState } from 'react';
//using value from previous State

function State2(){
    const [count, changeCount] = useState(0);
    function incrementFive(){
        for(let i =0; i<6; i++){
            //changeCount(count + i)
            changeCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <h1> Count : {count}</h1>
            <button onClick={() => {changeCount(count + 1)}}>Click</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default State2;