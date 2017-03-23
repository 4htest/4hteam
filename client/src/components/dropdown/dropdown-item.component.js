import React from 'react';

const DropdownItem = ({ onClick, children}) => {
	return (
		<li key={children} onClick={onClick}>
			{children}
		</li>
	);
};

export default DropdownItem;