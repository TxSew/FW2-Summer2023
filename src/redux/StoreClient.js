import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/CounterReducer";
import  cardSlice  from "./Card/CardReducer";
import ProductReducer from "./Product/ProductReducer";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		cart: cardSlice,
		crud: ProductReducer,
	},
});
