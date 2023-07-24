import { createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
	cartItem: localStorage.getItem('CartItems') ? JSON.parse(localStorage.getItem('CartItems')) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

export const cardSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItem.findIndex((item) => item.productID === action.payload.productID);
			 console.log(itemIndex)
			if (itemIndex >= 0) {
			 const thu=	state.cartItem[itemIndex].cartQuantity += 1;
			 toast.info("Cập nhật giỏ hàng thành công!", {
				position: "bottom-right",
			 })
			  console.log('thu', thu)
			} else {
				const itemProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItem.push(itemProduct);
				toast.success(" Thêm thành công sản phẩm vào giỏ hàng!", {
					position: "bottom-right",
				 })
			}
			localStorage.setItem('CartItems' , JSON.stringify(state.cartItem))
		},
		getTotal(state, action) {
			let { total, quantity } = state.cartItem.reduce(
				(cartTotal, cartItem) => {
					let { price, cartQuantity } = cartItem;
					let itemTotal = price * cartQuantity;
					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;
					return cartTotal;
				},
				{   
					total: 0,
					quantity: 0,
				}
				);
				state.cartTotalQuantity = quantity
				state.cartTotalAmount = total
		},
		removeItem (state, action) {
			 const remove =state.cartItem.filter((item) => item.productID !==action.payload.productID)
			 state.cartItem = remove
			  localStorage.setItem('CartItems' , JSON.stringify(state.cartItem))
			  toast.error('Đã xóa sản phẩm khỏi giỏ hàng!', {
				position:"bottom-right"
			  })
		}
	},
});

// Action creators are generated for each case reducer function
export const { addToCart  , getTotal , removeItem} = cardSlice.actions;

export default cardSlice.reducer;
