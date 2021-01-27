import React, { useState, useEffect } from 'react';

export default function UseEffectHook({ initialName = '' }) {
	let valueFromLocalStorage = window.localStorage.getItem('name');

	const [ name, setName ] = useState(valueFromLocalStorage || initialName);

	useEffect(() => {
		//This will be rendered and re-rendered when we the DOM is updated.
		window.localStorage.setItem('name', name);
	});

	function handleNameChange(event) {
		setName(event.target.value);
	}

	return (
		<div>
			<h3>Implementing UseEffect Hook</h3>
			<p>
				In this example, we will be using useEffect hook inorder to store and retrieve data from local storage
			</p>
			<form>
				<label htmlFor="name">Name: </label>
				<input id="name" type="text" value={name} onChange={handleNameChange} />
				{name ? <p>Hello {name}</p> : 'Please type your name'}
			</form>
		</div>
	);
}
