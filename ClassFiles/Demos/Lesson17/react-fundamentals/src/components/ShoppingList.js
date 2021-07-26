import React from 'react';
import useArray from '../hooks/array';

const ShoppingList = props => {
    const list = useArray(['Eggs', 'Milk', 'Bread']);

    return (
        <div>
            <h1>Shopping List</h1>
            <button onClick={() => list.add('something')}>Add</button>
            <ul>
                {list.value.map((item, i) => (
                    <li key={i}>
                        <button onClick={() => list.removeByIndex(i)}>Delete</button>
                        &nbsp;{item} 
                    </li>
                ))}
            </ul>
            <button onClick={list.clear}>Clear</button>
        </div>
    );

};

export default ShoppingList;
