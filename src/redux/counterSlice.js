import { createSlice } from "@reduxjs/toolkit";

// const [num, setNum] = useState(0)
// useState(0)
// two states
const initialState = {
	value: 0,
	setNum: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	// could also be initialState: {value: 0}
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		addAmount: (state) => {
			state.value += state.setNum;
			// payload is going to be
			// anything passed as a param in this method
			//addAmount(234) the 234 is the payload
			// state.value += action.payload;
		},
		setAmount: (state, action) => {
			// anything passed as a param in this method
			//addAmount(234) the 234 is the payload
			state.setNum = action.payload;
		},
	},
});

export const { increment, decrement, addAmount, setAmount } =
	counterSlice.actions;
export default counterSlice.reducer;
