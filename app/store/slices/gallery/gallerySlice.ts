import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState: {
  loading: boolean;
  galleryData: any;
} = {
  loading: false,
  galleryData: null,
};

const slice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    galleryRequested: (state, action) => {
      state.loading = true;
    },
    galleryReceived: (state, action) => {
      state.loading = false;
      state.galleryData = action.payload;
    },
    galleryNotReceived: (state, action) => {
      state.loading = false;
    },
  },
});

const { galleryRequested, galleryReceived, galleryNotReceived } = slice.actions;
export default slice.reducer;

export const loadGallery =
  (environment?: string, id?: number) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url:
              environment && id
                ? PRE_URL +
                  `extras/gallery_version2/?${environment}=${id}&not_chapters=True`
                : PRE_URL + `extras/gallery_version2/?not_chapters=True`,
            extraheaders: "Token " + token,
            method: "get",
            onStart: galleryRequested.type,
            onSuccess: galleryReceived.type,
            onError: galleryNotReceived.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(galleryNotReceived(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user gallery:", error);
      dispatch(galleryNotReceived(error.message));
    }
  };
