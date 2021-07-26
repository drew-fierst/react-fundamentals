import React, { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ToDoList.module.css';

const initialToDos = [
    { id: 1, text: 'Buy groceries'}, 
    { id: 2, text: 'Wash the car'}, 
    { id: 3, text: 'Clean the house'}
];

const ToDoList = () => {
    const [toDos, setToDos] = useState(initialToDos);
    const [nextId, setNextId] = useState(4);
    const [filter, setFilter] = useState('');
    const [displayedToDos, setDisplayedToDos] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (filter === inputRef.current.value) {
                setDisplayedToDos(toDos.filter(elt => filter === '' || elt.text.includes(filter)));
            }
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [toDos, filter, inputRef]);

    const addItemHandler = () => {
		const text = prompt('Enter a to-do item');
		if (text) {
            const newToDo = {
                id: nextId,
                text: text
            };
            setToDos(prevToDos => [...prevToDos, newToDo]);
            setNextId(prevId => prevId + 1)
		}
	}

	const removeItemHandler = (id) => {
        setToDos(prevToDos => prevToDos.filter(item => item.id !== id));
    }
    
    const listItems = displayedToDos.map( (item) => (
        <CSSTransition key={item.id} timeout={500} classNames={{...styles}}>
            <li className={styles.listItem} 
                    onClick={() => removeItemHandler(item.id)}>{item.text}</li>
        </CSSTransition>
    ) );

    return (
        <div>
            <p><button className={styles.button} onClick={addItemHandler}>Add Item</button></p>
            <p>
                <label>Filter To Do List&nbsp;
                    <input 
                        ref={inputRef}
                        type="text"
                        value={filter}
                        onChange={evt => setFilter(evt.target.value)}
                        />
                </label>
            </p>
            <p>Click a To-Do Item to Remove.</p>
            <TransitionGroup component="ul" className={styles.list}>
                    {listItems}
            </TransitionGroup>
        </div>
    )
}

export default ToDoList;
