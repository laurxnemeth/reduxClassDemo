import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import animeSlice from "./animeSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		anime: animeSlice,
	},
});
