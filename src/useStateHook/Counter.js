import React, { useState } from 'react';

export default function Counter() {
	const [ counter, setCounter ] = useState(0);

	function incrementHandler() {
		setCounter(counter + 1);
	}

	function decrementHandler() {
		setCounter(counter - 1);
	}

	return (
		<div>
			<p>Current counter value : {counter}</p>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
		</div>
	);
}
