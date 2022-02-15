import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";

const App = () => {
	const { value } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Redux Toolkit Demo</h1>
			<h3>The Value is {value}</h3>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<br />
			<br />
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default App;
