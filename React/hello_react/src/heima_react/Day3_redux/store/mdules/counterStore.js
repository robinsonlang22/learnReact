import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

const { increment, decrement } = counterStore.actions;
const reducer = counterStore.reducer;

export default { increment, decrement, reducer };

