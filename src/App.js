import React, { useState } from 'react';
import './App.css';

function App() {
	const [ counter, setCounter ] = useState(0);

	const increaseCounterHandler = () => {
		setCounter(counter + 1);
	};

	const decreaseCounterHandler = () => {
		setCounter(counter - 1);
	};

	return (
		<div className="App">
			<header>Understanding REACT HOOKS</header>
			<div>
				<p> Current Counter Value = {counter} </p>
				<button onClick={increaseCounterHandler}>Increase</button>
				<button onClick={decreaseCounterHandler}>Decrease</button>
			</div>
		</div>
	);
}

export default App;
