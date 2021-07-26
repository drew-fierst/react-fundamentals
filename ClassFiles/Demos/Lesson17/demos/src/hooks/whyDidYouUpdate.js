// A huge thanks to Bruno Lemos for the idea and original code for this hook:
// https://twitter.com/brunolemos/status/1090377532845801473

import { useEffect, useRef } from 'react';

const useWhyDidYouUpdate = (name, props) => {
    // get a mutable ref object where we can store props
    // for comparison the next time this hook runs
    const previousProps = useRef();

    useEffect(() => {
        if (previousProps.current) {
            // get all keys from previous props and current props
            const allKeys = Object.keys({ ...previousProps.current, ...props });

            // create an object to track changed props
            const changes = {};

            // check each key
            allKeys.forEach(key => {
                if (previousProps.current[key] !== props[key]) {
                    changes[key] = {
                        from: previousProps.current[key],
                        to: props[key]
                    }
                }
            });

            if (Object.keys(changes).length) {
                // there are some changes, so output to console
                console.log('[why-did-you-update]', name, changes);
            }
        }

        previousProps.current = props;
    });

};

export default useWhyDidYouUpdate;
