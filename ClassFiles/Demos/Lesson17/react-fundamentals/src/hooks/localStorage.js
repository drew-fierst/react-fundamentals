import { useState, useEffect } from 'react';

const useLocalStorage = (key, def) => {

    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(def));
        } catch (e) {
            value = def;
        }
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state]);

    return [state, setState];
};

export default useLocalStorage;
