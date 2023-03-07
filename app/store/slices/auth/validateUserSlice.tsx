import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  loading: boolean;
  validation: any;
} = {
  loading: false,
  validation: "",
};

const validateUserSlice = createSlice({
  name: "validateUser",
  initialState,
  reducers: {
    validateUserRequested: (state, action) => {
      state.loading = true;
    },
    validateUserReceived: (state, action) => {
      state.loading = false;
      state.validation = action.payload;
      console.log("action.payload", action.payload.message);
    },
    validateUserRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  validateUserRequested,
  validateUserReceived,
  validateUserRequestFailed,
} = validateUserSlice.actions;

export default validateUserSlice.reducer;

export const validateUser = (data: any) => (dispatch: AppDispatch) => {
  dispatch(
    apiCallBegan({
      url: `${PRE_URL}auth/ManageMemberValidation/`,
      method: "post",
      data,
      onStart: validateUserRequested.type,
      onSuccess: validateUserReceived.type,
      onError: validateUserRequestFailed.type,
    })
  );
};
