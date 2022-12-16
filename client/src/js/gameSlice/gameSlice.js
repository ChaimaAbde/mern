import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getgames = createAsyncThunk("game/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/game");
    return await result;
  } catch (error) {
    console.log(error);
  }
});

export const addGame = createAsyncThunk("game/add", async (game) => {
  try {
    let result = axios.post("http://localhost:5000/game/add", game);
    return await result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  games: null,
  status: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: {
    [getgames.pending]: (state) => {
      state.status = "pending";
    },
    [getgames.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.games = action.payload.data.games;
    },
    [getgames.rejected]: (state) => {
      state.status = "rejected";
    },
    [addGame.pending]: (state) => {
      state.status = "pending";
    },
    [addGame.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [addGame.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = gameSlice.actions;

export default gameSlice.reducer;
