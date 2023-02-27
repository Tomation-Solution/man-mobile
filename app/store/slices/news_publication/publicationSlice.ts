import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  publications: any;
  comments: any;
  loading: boolean;
  commenstLoading: boolean;
} = {
  publications: [],
  comments: [],
  loading: false,
  commenstLoading: false,
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
    },
    publicationRequestFailed: (state, action) => {
      state.loading = false;
    },
    commentRequested: (state, action) => {
      state.commenstLoading = true;
    },

    commentReceived: (state, action) => {
      state.commenstLoading = false;
      state.comments = action.payload;
    },

    commentRequestFailed: (state, action) => {
      state.commenstLoading = false;
    },
  },
});

const {
  publicationRequested,
  publicationReceived,
  publicationRequestFailed,
  commentReceived,
  commentRequestFailed,
  commentRequested,
} = publicationSlice.actions;

export default publicationSlice.reducer;

export const getPublication =
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
                  `publication/getyourpublication/?not_council=True&not_commitee=True&not_chapters=True${environment}=${id}`
                : PRE_URL +
                  "publication/getyourpublication/?not_council=True&not_commitee=True&not_chapters=True",

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

export const getComments =
  (publicationId: string) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url:
              PRE_URL +
              `publication/publicationview__comment/?publication_id=${publicationId}`,
            extraheaders: "Token " + token,
            method: "get",
            onStart: commentRequested.type,
            onSuccess: commentReceived.type,
            onError: commentRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(commentRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting comments", error);
      dispatch(commentRequestFailed(error.message));
    }
  };

export const createComment =
  (publicationId: string, comment: string) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + `publication/publicationview__comment/`,
            extraheaders: "Token " + token,
            method: "post",
            data: {
              news: publicationId,
              comment: comment,
            },
            onStart: commentRequested.type,
            onSuccess: commentReceived.type,
            onError: commentRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(commentRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting comments", error);
      dispatch(commentRequestFailed(error.message));
    }
  };

export const deleteComment =
  (commentId: string) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + `publication/publicationview__comment/${commentId}/`,
            extraheaders: "Token " + token,
            method: "delete",
            onStart: commentRequested.type,
            onSuccess: commentReceived.type,
            onError: commentRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(commentRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting comments", error);
      dispatch(commentRequestFailed(error.message));
    }
  };
