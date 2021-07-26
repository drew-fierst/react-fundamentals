import { useCallback, useState } from 'react';

const useArray = initialValues => {
    const [value, setValue] = useState(initialValues);

    return {
        value,
        setValue,
        add: useCallback(item => setValue(arr => [...arr, item])),
        clear: useCallback(() => setValue(() => [])),
        removeById: useCallback(id => setValue(arr => arr.filter(v => v && v.id !== id))),
        removeByIndex: useCallback(idx => setValue(arr => {
            arr.splice(idx, 1);
            return [...arr];
        }))
    };
};

export default useArray;
