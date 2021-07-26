import React, { useEffect, useRef, useReducer } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ToDoList.module.css';
import BusySpinner from '../UI/BusySpinner';

const toDoReducer = (state, action) => {
    let newItems;
    let newDisplayed;

    const applyFilter = (items, filter) => 
        items.filter(elt => filter === '' || elt.text.includes(filter));

    switch (action.type) {
        case 'SET_ITEMS':
            newItems = action.payload;
            newDisplayed = applyFilter(newItems, state.filter);
            return {
                ...state,
                toDos: newItems,
                displayedToDos: newDisplayed
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        case 'APPLY_FILTER':
            newDisplayed = applyFilter(state.toDos, state.filter);
            return {
                ...state,
                displayedToDos: newDisplayed
            };
        case 'ADD':
            newItems = [...state.toDos, action.payload];
            newDisplayed = applyFilter(newItems, state.filter);
            return {
                ...state,
                toDos: newItems,
                displayedToDos: newDisplayed
            };
        case 'DELETE':
            newItems = state.toDos.filter(elt => elt.id !== action.payload);
            newDisplayed = applyFilter(newItems, state.filter);
            return {
                ...state,
                toDos: newItems,
                displayedToDos: newDisplayed
            };
        default:
            return state;
    }
};

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case 'SENT':
            return { loading: true, error: null };
        case 'RESPONSE':
            return { ...httpState, loading: false };
        case 'ERROR':
            return { loading: false, error: action.payload };
        default:
            return httpState;
    }
};

const ToDoList = () => {
    const [state, dispatch] = useReducer(toDoReducer, { toDos: [], displayedToDos: [], filter: ''});
    const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
    const inputRef = useRef(null);

    useEffect(() => {
        dispatchHttp({type: 'SENT'})
        fetch('http://localhost:8005/todo')
            .then(resp => resp.json())
            .then(data => {
                dispatchHttp({type: 'RESPONSE'})
                dispatch({ type: 'SET_ITEMS', payload: data });
            })
            .catch(err => {
                dispatchHttp({type: 'ERROR', payload: 'Error loading To Do items.'})
            });
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (state.filter === inputRef.current.value) {
                dispatch({type: 'APPLY_FILTER'});
            }
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [state, inputRef]);

    const addItemHandler = () => {
		const text = prompt('Enter a to-do item');
		if (text) {
            dispatchHttp({type: 'SENT'})
            fetch('http://localhost:8005/todo', {
                method: 'POST',
                body: JSON.stringify({ text: text}),
                headers: { 'Content-Type': 'application/json' }
            }).then(resp => resp.json())
            .then(data => {
                dispatchHttp({type: 'RESPONSE'})
                if (data.success) {
                    dispatch({ type: 'ADD', payload: data.item });
                }
            });
		}
	}

	const removeItemHandler = (id) => {
        dispatchHttp({type: 'SENT'})
        fetch(`http://localhost:8005/todo/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
        .then(data => {
            dispatchHttp({type: 'RESPONSE'})
            if (data.success) {
                dispatch({ type: 'DELETE', payload: id });
            }
        });
    }
    
    const listItems = state.displayedToDos.map( (item) => (
        <CSSTransition key={item.id} timeout={500} classNames={{...styles}}>
            <li className={styles.listItem} 
                    onClick={() => removeItemHandler(item.id)}>{item.text}</li>
        </CSSTransition>
    ) );

    return (
        <div>
            <div className={styles.centered}>
                <button className={styles.button} onClick={addItemHandler}>Add Item</button>
                {httpState.loading && <BusySpinner></BusySpinner>}
            </div>
            <p>
                <label>Filter To Do List&nbsp;
                    <input 
                        ref={inputRef}
                        type="text"
                        value={state.filter}
                        onChange={evt => dispatch({ type: 'SET_FILTER', payload: evt.target.value })}
                        />
                </label>
            </p>
            <p>Click a To-Do Item to Remove.</p>
            <TransitionGroup component="ul" className={styles.list}>
                    {listItems}
            </TransitionGroup>
            {httpState.error && <p class="danger">{httpState.error}</p>}
        </div>
    )
}

export default ToDoList;
