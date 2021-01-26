import React, { useState } from 'react';
import './App.css';
import Greetings from './Greetings';
import UseEffectHook from './UseEffectHook';
//import Userform from './UserForm';

function App() {
	// const [ counter, setCounter ] = useState(0);

	// const increaseCounterHandler = () => {
	// 	setCounter(counter + 1);
	// };

	// const decreaseCounterHandler = () => {
	// 	setCounter(counter - 1);
	// };

	return (
		<div className="App">
			<header>Understanding REACT HOOKS</header>
			{/* <div>
				<p> Current Counter Value = {counter} </p>
				<button onClick={increaseCounterHandler}>Increase</button>
				<button onClick={decreaseCounterHandler}>Decrease</button>
			</div> */}
			{/* <h4>useState Hook</h4>
			<Greetings initialName="Krishna" /> */}

			<h4>useEffect Hook</h4>
			<UseEffectHook />

			{/* 
			<h4>User Form</h4>
			<Userform /> */}
		</div>
	);
}

export default App;
