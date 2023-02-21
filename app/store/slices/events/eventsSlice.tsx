import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  events: any;
  loading: boolean;
} = {
  events: [],
  loading: false,
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
    },
  },
});

const { eventsRequested, eventsReceived, eventRequestFailed } =
  eventsSlice.actions;

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

export const registerEvents = (id: number) => async (dispatch: AppDispatch) => {
  const form = new FormData();
  form.append("event_id", id.toString());
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + `event/eventview/register_for_free_event/`,
          extraheaders: "Token " + token,
          form,
          method: "post",
          onStart: eventsRequested.type,
          onSuccess: eventRequestFailed.type,
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
      const form = new FormData();
      form.append("event_id", data.event_id.toString());

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url: PRE_URL + `event/request-reschedule/`,
            extraheaders: "Token " + token,
            form,
            data,
            method: "post",
            onStart: eventsRequested.type,
            onSuccess: eventRequestFailed.type,
            onError: eventRequestFailed.type,
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
