import React, { useState } from 'react';

export default function Greetings() {
	const [ greetings, setGreetings ] = useState('Please type your name');

	const handleGreetings = (initialName) => {
		setGreetings(`Hello, ${initialName}`);
	};

	return (
		<div>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" onChange={(event) => handleGreetings(event.target.value)} />
			<p>{greetings}</p>
		</div>
	);
}
