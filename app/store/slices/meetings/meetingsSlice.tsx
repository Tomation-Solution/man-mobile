import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  meetings: any;
  loading: boolean;
  meetingRegistered: boolean;
  appologySent: boolean;
  message: string;
} = {
  meetings: [],
  loading: false,
  meetingRegistered: false,
  appologySent: false,
  message: "",
};

const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    meetingsRequested: (state, action) => {
      state.loading = true;
    },
    meetingsReceived: (state, action) => {
      state.loading = false;
      state.meetings = action.payload;
    },
    meetingsRequestFailed: (state, action) => {
      state.loading = false;
    },
    meetingRegistered: (state, action) => {
      state.meetingRegistered = true;
      state.loading = false;
    },

    meetingNotRegistered: (state, action) => {
      state.meetingRegistered = false;
      state.loading = false;
      state.message = action.payload.response.data.message.error;
    },
    appologySent: (state) => {
      state.appologySent = true;
      state.loading = false;
    },

    clearMeetingConfig: (state) => {
      state.message = "";
      state.meetingRegistered = false;
      state.appologySent = false;
    },
  },
});

export const {
  meetingsRequested,
  meetingsReceived,
  meetingsRequestFailed,
  meetingNotRegistered,
  meetingRegistered,
  appologySent,
  clearMeetingConfig,
} = meetingsSlice.actions;

export default meetingsSlice.reducer;

export const loadMeetings =
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
                  `meeting/meeting_member/?not_council=True&not_commitee=True&not_chapters=True&${environment}=${id}`
                : PRE_URL +
                  `meeting/meeting_member/?not_council=True&not_commitee=True&not_chapters=True`,
            extraheaders: "Token " + token,
            method: "get",
            onStart: meetingsRequested.type,
            onSuccess: meetingsReceived.type,
            onError: meetingsRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(meetingsRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting meetings", error);
      dispatch(meetingsRequestFailed(error.message));
    }
  };

export const resgisterForMeeting =
  (id: number, proxy_participants?: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url: PRE_URL + `meeting/meeting_member/`,
            extraheaders: "Token " + token,
            data: {
              meeting: id,
              proxy_participants: proxy_participants ? proxy_participants : [],
            },
            method: "post",
            onStart: meetingsRequested.type,
            onSuccess: meetingRegistered.type,
            onError: meetingNotRegistered.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(meetingsRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured registerig you for meeting", error);
      dispatch(meetingsRequestFailed(error.message));
    }
  };

export const appology =
  (id: number, reason: string) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url:
              PRE_URL + `meeting/meeting_member/appologise_for_not_attending/`,
            extraheaders: "Token " + token,
            data: {
              meeting: id,
              note: reason,
            },
            method: "post",
            onStart: meetingsRequested.type,
            onSuccess: appologySent.type,
            onError: meetingNotRegistered.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(meetingsRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured while appologizing", error);
      dispatch(meetingsRequestFailed(error.message));
    }
  };
