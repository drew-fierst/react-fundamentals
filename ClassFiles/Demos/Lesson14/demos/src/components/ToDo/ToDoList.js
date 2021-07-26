import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ToDoList.module.css';

const initialToDos = [
    { id: 1, text: 'Buy groceries'}, 
    { id: 2, text: 'Wash the car'}, 
    { id: 3, text: 'Clean the house'}
];

const ToDoList = () => {


    const addItemHandler = () => {
		const text = prompt('Enter a to-do item');
		if (text) {
            // add to do item here

		}
	}

	const removeItemHandler = (id) => {
        // remove to do item here
    }
    
    // repeat this content for each to do item
        // <CSSTransition key={item.id} timeout={500} classNames={{...styles}}>
        //     <li className={styles.listItem} 
        //             onClick={() => removeItemHandler(item.id)}>{item.text}</li>
        // </CSSTransition>


    return (
        <div>
            <p><button className={styles.button} onClick={addItemHandler}>Add Item</button></p>
            <p>Click a To-Do Item to Remove.</p>
            <TransitionGroup component="ul" className={styles.list}>
                    
            </TransitionGroup>
        </div>
    )
}

export default ToDoList;
