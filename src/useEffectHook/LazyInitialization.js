//In this example we will be learning Lazy State Initialization.
//This means we will be using the localStorage rendering only when we need it
//and not on every render or re-render.

import React, { useState, useEffect } from 'react';

export default function LazyInitialization({ initial = '' }) {
	function nameFunction() {
		console.log('rendering from nameFunction');
		return window.localStorage.getItem('name') || initial;
	}

	const [ name, setName ] = useState(nameFunction);

	useEffect(() => {
		console.log('rendering from useEffect');
		window.localStorage.setItem('name', name);
	});

	function handleChange(event) {
		setName(event.target.value);
	}

	return (
		<div>
			<form>
				<label>Name: </label>
				<input value={name} onChange={handleChange} />
				{name ? <p>Hello {name}</p> : <p>Please enter your name</p>}
			</form>

			<form>
				<label>Male</label>
				<input type="radio" name="gender" value="male" />

				<label>Female</label>
				<input type="radio" name="gender" value="female" />
			</form>
		</div>
	);
}
