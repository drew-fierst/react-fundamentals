import { useReducer, useCallback } from 'react';

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

const useHttpState = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });

    return {
        loading: httpState.loading,
        error: httpState.error,
        sentRequest: useCallback(() => dispatchHttp({type: 'SENT'})),
        receivedResponse: useCallback(() => dispatchHttp({type: 'RESPONSE'})),
        threwError: useCallback(err => dispatchHttp({type: 'ERROR', payload: err.message}))
    };

};

export default useHttpState;
