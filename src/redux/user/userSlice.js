import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        name: "Anser",
        username: "mansern",
      },
      {
        id: 2,
        name: "Naseer",
        username: "mnaseer",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { createUser, deleteUser, getUser } = userSlice.actions;

export default userSlice.reducer;
