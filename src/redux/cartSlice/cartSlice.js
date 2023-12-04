import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  // A map of reducer functions for handling actions.
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        // console.log("Quantity Increased to",itemInCart.quantity);
        toast.success(`Quantity Increased to ${itemInCart.quantity}`);

      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Item added in cart");
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
    },

    removeAll: (state, action) => {
      const emptyArr = [];
      return (state.cart = emptyArr);
    },

    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.itemPrice;
        // quantity nh hoga yahan??
        total += item.itemPrice * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// The cartSlice.reducer is exported to be combined with other reducers in the Redux store. 
export const cartReducer = cartSlice.reducer;

// cartSlice.actions contains the action creators for each defined reducer. 
// These action creators can be dispatched to trigger the corresponding reducer functions for updating the state.
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
