import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  publications: any;
  loading: boolean;
} = {
  publications: [],
  loading: false,
};

const publicationSlice = createSlice({
  name: "publication",
  initialState,
  reducers: {
    publicationRequested: (state, action) => {
      state.loading = true;
    },
    publicationReceived: (state, action) => {
      state.publications = action.payload;
      state.loading = false;
      console.log("publicationReceived", state.publications);
    },
    publicationRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

const { publicationRequested, publicationReceived, publicationRequestFailed } =
  publicationSlice.actions;

export default publicationSlice.reducer;

export const getPublication = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url:
            PRE_URL +
            "publication/getyourpublication/?for_members=True&is_for_all_grade=True",
          extraheaders: "Token " + token,
          method: "get",
          onStart: publicationRequested.type,
          onSuccess: publicationReceived.type,
          onError: publicationRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(publicationRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occured getting publication", error);
    dispatch(publicationRequestFailed(error.message));
  }
};
