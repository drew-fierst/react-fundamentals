import React from 'react';

const discountContext = React.createContext({
	enabled: false,
	applyDiscount: () => {}
});

export default discountContext;
