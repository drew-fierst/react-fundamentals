import React, { useState } from 'react';

export const TermsContext = React.createContext({
    accepted: false,
    accept: () => {}
});

const TermsContextProvider = props => {

    const [accepted, setAccepted] = useState(false)

    const acceptHandler = () => {
        setAccepted(true);
    }

    return (
        <TermsContext.Provider value={{accept: acceptHandler, accepted: accepted}}>
            {props.children}
        </TermsContext.Provider>
    )
};

export default TermsContextProvider;
