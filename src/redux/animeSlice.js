import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//createAsyncThunk(name of slice/what we want to do with it, async function)
export const fetchAnimeAsync = createAsyncThunk(
	"anime/fetchAnime",
	async () => {
		try {
			const response = await axios.get("https://api.jikan.moe/v4/top/anime");
			return response.data;
		} catch (err) {
			console.error(err);
		}
	}
);

const initialState = {
	data: [],
	error: null,
};

export const animeSlice = createSlice({
	name: "anime",
	initialState,
	reducers: {},
	extraReducers(builder) {
		// action.payload is related to that API call
		// whatever we get back from that API call, is the value of action.payload
		builder
			.addCase(fetchAnimeAsync.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(fetchAnimeAsync.rejected, (state, action) => {
				state.error = action.error;
			});
	},
});

export const getAnime = (state) => {
	return state.anime.data;
};

export default animeSlice.reducer;
