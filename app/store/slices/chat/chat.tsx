import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  chat: any;
  loading: boolean;
} = {
  chat: [],
  loading: false,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      const newChat = [...state.chat, action.payload];
      state.chat = newChat;
      console.log("state.chat", action.payload);
    },

    clearChat: (state) => {
      state.chat = [];
    },
    chatRequested: (state, action) => {
      state.loading = true;
    },
    chatReceived: (state, action) => {
      state.loading = false;
      state.chat = action.payload.data;
      console.log("state.chat", action.payload.data);
    },
    chatRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  chatRequested,
  chatReceived,
  chatRequestFailed,
  addChat,
  clearChat,
} = chatSlice.actions;

export default chatSlice.reducer;

export const getChat = (url: string) => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + url,
          extraheaders: "Token " + token,
          method: "get",
          onStart: chatRequested.type,
          onSuccess: chatReceived.type,
          onError: chatRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(chatRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occured getting members", error);
  }
};
