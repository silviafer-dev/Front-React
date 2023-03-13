import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usersList: [],
  status: "idle",
};
const uri = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(uri);
  return response.data;
});

export const postUser = createAsyncThunk("users/postUsers", async (data) => {
  const response = await axios.post(uri, data);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.usersList = action.payload;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.usersList = [action.payload, ...state.usersList];
    });
  },
});

export default usersSlice.reducer;
export const selectState = (state) => state.users.usersList;
