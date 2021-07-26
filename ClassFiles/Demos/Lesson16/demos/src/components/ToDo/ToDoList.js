import React, { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ToDoList.module.css';

const ToDoList = () => {
    const [toDos, setToDos] = useState([]);
    const [filter, setFilter] = useState('');
    const [displayedToDos, setDisplayedToDos] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:8005/todo')
            .then(resp => resp.json())
            .then(data => {
                setToDos(data);
            });
    }, []);

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
            fetch('http://localhost:8005/todo', {
                method: 'POST',
                body: JSON.stringify({ text: text}),
                headers: { 'Content-Type': 'application/json' }
            }).then(resp => resp.json())
            .then(data => {
                if (data.success) {
                    setToDos(prevToDos => [...prevToDos, data.item]);
                }
            });
		}
	}

	const removeItemHandler = (id) => {
        fetch(`http://localhost:8005/todo/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
        .then(data => {
            if (data.success) {
                setToDos(prevToDos => prevToDos.filter(item => item.id !== id));
            }
        });
    }
    
    const listItems = displayedToDos.map( (item) => (
        <CSSTransition key={item.id} timeout={500} classNames={{...styles}}>
            <li className={styles.listItem} 
                    onClick={() => removeItemHandler(item.id)}>{item.text}</li>
        </CSSTransition>
    ) );

    return (
        <div>
            <div className={styles.centered}>
                <button className={styles.button} onClick={addItemHandler}>Add Item</button>
            </div>
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
