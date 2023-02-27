import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  news: any;
  comments: any;
  loading: boolean;
  commenstLoading: boolean;
} = {
  news: [],
  comments: [],
  loading: false,
  commenstLoading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsRequested: (state, action) => {
      state.loading = true;
    },
    newsReceived: (state, action) => {
      state.loading = false;
      state.news = action.payload;
    },

    newsRequestFailed: (state, action) => {
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
  newsRequested,
  newsReceived,
  newsRequestFailed,
  commentReceived,
  commentRequestFailed,
  commentRequested,
} = newsSlice.actions;

export default newsSlice.reducer;

export const getNews =
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
                  `news/newsview/get_news/?not_council=True&not_commitee=True&not_chapters=True&${environment}=${id}`
                : PRE_URL +
                  `news/newsview/get_news/?not_council=True&not_commitee=True&not_chapters=True`,
            extraheaders: "Token " + token,
            method: "get",
            onStart: newsRequested.type,
            onSuccess: newsReceived.type,
            onError: newsRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(newsRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting news", error);
      dispatch(newsRequestFailed(error.message));
    }
  };

export const getComments =
  (newsId: string) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url: PRE_URL + `news/newsview__comment/?news_id=${newsId}`,
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
  (newsId: string, comment: string) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + `news/newsview__comment/`,
            extraheaders: "Token " + token,
            method: "post",
            data: {
              news: newsId,
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
            url: PRE_URL + `news/newsview__comment/${commentId}/`,
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
