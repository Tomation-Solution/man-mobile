import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  events: any;
  paidEventDetails: any;
  loading: boolean;
  eventRescheduled: boolean;
  eventNotRescheduled: boolean;
  registerEvent: boolean;
  message: string;
  error: string;
} = {
  events: [],
  paidEventDetails: {},
  loading: false,
  eventRescheduled: false,
  eventNotRescheduled: false,
  registerEvent: false,
  message: "",
  error: "",
};
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventsRequested: (state, action) => {
      state.loading = true;
    },
    eventsReceived: (state, action) => {
      state.loading = false;
      state.events = action.payload;
    },
    eventRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message.error;
    },
    eventRegistered: (state, action) => {
      state.loading = false;
      state.registerEvent = true;
    },
    paidEventRegistered: (state, action) => {
      state.loading = false;
      state.registerEvent = true;
      state.paidEventDetails = action.payload?.data?.data;
      console.log("action.payload", state.paidEventDetails);
    },

    eventRescheduled: (state, action) => {
      state.loading = false;
      state.eventRescheduled = true;
    },
    eventNotRescheduled: (state, action) => {
      state.loading = false;
      state.eventNotRescheduled = true;
      state.error = action.payload.response.data.message.error;
    },
    clearConfig: (state) => {
      state.message = "";
      state.registerEvent = false;
      state.error = "";
      state.loading = false;
      state.eventRescheduled = false;
      state.eventNotRescheduled = false;
      state.paidEventDetails = {};
    },
  },
});

export const {
  eventsRequested,
  eventsReceived,
  paidEventRegistered,
  eventRequestFailed,
  eventRescheduled,
  eventNotRescheduled,
  eventRegistered,
  clearConfig,
} = eventsSlice.actions;

export default eventsSlice.reducer;

export const getEvents =
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
                  `event/eventview/get_events/?not_council=True&not_commitee=True&not_chapters=True&${environment}=${id}`
                : PRE_URL +
                  `event/eventview/get_events/?not_council=True&not_commitee=True&not_chapters=True`,
            extraheaders: "Token " + token,
            method: "get",
            onStart: eventsRequested.type,
            onSuccess: eventsReceived.type,
            onError: eventRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(eventRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting events", error);
      dispatch(eventRequestFailed(error.message));
    }
  };

export const registerEvents =
  (id: number, is_paid: boolean, proxy_participants?: any) =>
  async (dispatch: AppDispatch) => {
    const form = new FormData();
    form.append("event_id", id.toString());
    if (proxy_participants) {
      form.append("proxy_participants", JSON.stringify(proxy_participants));
    }

    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url: is_paid
              ? `${PRE_URL}dues/process_payment/event_payment/${id}/`
              : `${PRE_URL}0event/eventview/register_for_free_event/`,
            extraheaders: "Token " + token,
            contentType: "multipart/form-data",
            data: !is_paid && proxy_participants ? form : "",
            method: "post",
            onStart: eventsRequested.type,
            onSuccess: is_paid
              ? paidEventRegistered.type
              : eventRegistered.type,
            onError: eventRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(eventRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured registerring you", error);
      dispatch(eventRequestFailed(error.message));
    }
  };

export const requestReschedule =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url: PRE_URL + `event/request-reschedule/`,
            extraheaders: "Token " + token,
            data,
            method: "post",
            onStart: eventsRequested.type,
            onSuccess: eventRescheduled.type,
            onError: eventNotRescheduled.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(eventRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured while rescheduling", error);
      dispatch(eventRequestFailed(error.message));
    }
  };
