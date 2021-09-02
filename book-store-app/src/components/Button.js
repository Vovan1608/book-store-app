import React from "react";

const Button = ({name, id}) => {
	return (
		<button className='btn' id={id} disabled={name === 'Submit' || name === 'Edit'}>
			{name}
		</button>
	);
}

export default Button;