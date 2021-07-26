import { useReducer } from 'react';

const useToggle = (initial = false) => {
    return useReducer((state) => !state, initial);
};

export default useToggle;
