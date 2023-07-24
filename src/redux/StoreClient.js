import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/CounterReducer";
import  cardSlice  from "./Card/CardReducer";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		cart: cardSlice,
	},
});
