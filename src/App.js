import React from 'react';
import './App.css';
//import Counter from "./Counter";
//import Greetings from './Greetings';
//import UseEffectHook from './useEffectHook/UseEffectHook';
import LazyInitialization from './useEffectHook/LazyInitialization';

//import Userform from './UserForm';

function App() {
	return (
		<div className="App">
			<h2>Understanding REACT HOOKS</h2>

			{/* <Counter /> */}
			{/* <h4>useState Hook</h4>
			<Greetings initialName="Krishna" /> */}

			<h4>useEffect Hook</h4>
			{/* <UseEffectHook initialName="Krishna" /> */}

			<LazyInitialization initial="Krishna" />
			{/* 
			<h4>User Form</h4>
			<Userform /> */}
		</div>
	);
}

export default App;
