import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

const slice = createSlice({
  name: "likeordislike",
  initialState,
  reducers: {
    likeordislikeRequested: (state, action) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.data = null;
    },
    likeordislikeReceived: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.data = action.payload;
    },
  },
});

const { likeordislikeRequested, likeordislikeReceived } = slice.actions;
export default slice.reducer;
