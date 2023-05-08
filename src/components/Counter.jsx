import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addAmount, setAmount } from "../redux/counterSlice";

function Counter() {
	const dispatch = useDispatch();
	// state dot name of slice dot name of state
	const state = useSelector((state) => state.counter);
	const count = useSelector((state) => state.counter.value);
	const setNum = useSelector((state) => state.counter.setNum);

	return (
		<div id="counter">
			<div id="increase-decrease">
				<button onClick={() => dispatch(decrement())}>-</button>
				<span className="counter">{count}</span>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>
			<div>
				<input 
					value={setNum}
					onChange={(input) => dispatch(setAmount(+input.target.value)) }
				/>
				{/* goal is for this to set a specific amount */}
				<button onClick={() => dispatch(addAmount())}>Add Amount</button>
			</div>
		</div>
	);
}


export default Counter;
