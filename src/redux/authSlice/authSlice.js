import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../api";

// These are async thunks, special Redux functions that handle asynchronous operations and return promises.

export const signinUser = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    // const result = await axios.post("http://localhost:8000/api/loginUser", {
      const result = await axios.post(`${url}/api/loginUser`, {
      email,
      password,
    });
    return result.data;
  }
);

export const createUser = createAsyncThunk(
  "user/create",
  async ({
    userType,
    userName,
    email,
    phoneNumber,
    address,
    password,
  }) => {
    // return await axios.post("http://localhost:8000/api/createUser", {
      return await axios.post(`${url}/api/createUser`, {
      userType,
      userName,
      email,
      phoneNumber,
      address,
      password,
    });
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => { });

export const checkIsUserAuthenticated = createAsyncThunk("user/isAuthenticated", async () => { });



// The initial state for the authentication slice contains two properties:
// isAuthenticated indicates whether the user is authenticated or not, 
// and isLoading indicate whether an asynchronous operation is in progress.

const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  // A map of reducer functions for handling synchronous actions
  reducers: {
    // setting the state back to the initial state
    signOutUser: (state) => initialState,
  },

  // A callback function to handle actions dispatched by the async thunks.
  // For each async thunk, there are three possible action types that can be dispatched:
  // pending: This action is dispatched when the async operation is started.
  // fulfilled: This action is dispatched when the async operation is successfully completed.
  // rejected: This action is dispatched when the async operation fails.
  // Each of these actions is associated with a reducer function that updates the state based on the action.

  extraReducers: ({ addCase }) => {

    // Login User
    addCase(signinUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(signinUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      // document.cookie = `token=${action.payload}; path=/; secure; SameSite=Lax`;
    });
    addCase(signinUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    // Create User
    addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Logout User
    addCase(logoutUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
    addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Check Is User Authenticated
    addCase(checkIsUserAuthenticated.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(checkIsUserAuthenticated.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(checkIsUserAuthenticated.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
export const { signOutUser } = authSlice.actions;
