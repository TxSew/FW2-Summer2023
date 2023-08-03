import { createSlice } from '@reduxjs/toolkit';
import ProductApi from '../../api/components/ProductApi';

const initialState = {
  productItem: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) =>  {
      ProductApi.add(state.productItem)
      .then((res) => {
         console.log(res);
      })
    }
  },
});

// Action creators are generated for each case reducer function
export const { detailProduct } = productSlice.actions;

export default productSlice.reducer;
