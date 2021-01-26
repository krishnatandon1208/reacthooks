import React, { useState } from 'react';

export default function Greetings({ initialName }) {
	const [ greetings, setGreetings ] = useState(initialName);

	function handleGreetings(event) {
		setGreetings(event.target.value);
	}

	return (
		<div>
			<form>
				<label htmlFor="name">Name:</label>
				<input value={greetings} type="text" id="name" onChange={handleGreetings} />
			</form>
			{greetings ? <strong>Hello {greetings}</strong> : <p>Please type your name</p>}
		</div>
	);
}
