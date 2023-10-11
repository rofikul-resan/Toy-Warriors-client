"use client";

const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      console.log("userSlice", action.payload);
      return (state = action.payload);
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
