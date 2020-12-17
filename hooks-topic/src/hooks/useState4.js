import React, {useState} from 'react';
//useState problem with array

function State4(){
    const [items, setItem] = useState([]) 

    function addItems(){
        return setItem([...items, {
            id : items.length,
            value : Math.floor(Math.random() * 10) +1
        }])
    }

    return (
        <div>
        <button onClick={addItems}>AddItems</button>
        <h2>Random Items:</h2>
        <ul>
        {items.map(item =>(
            <li key={item.id}>{item.value}</li>
        ))}
        </ul>
        </div>
    ) 
}

export default State4;