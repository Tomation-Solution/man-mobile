import { combineReducers } from "redux";
import authReducers from "./slices/auth/auth";
import profileReducers from "./slices/profile/profile";
import newsPublication from "./slices/news_publication/news_publication";
import gallery from "./slices/gallery/gallerySlice";
import meetings from "./slices/meetings/meetingsSlice";
import events from "./slices/events/eventsSlice";

import electionReducers from "./slices/elections/election";
import ServiceRequestReducers from "./slices/ServiceRequest/Servicerequest";
import duelistReducers from "./slices/due_list_and_owning_members/duelist";
import fundProjectReducers from "./slices/Fund_A_Project/fund_a_project";
import chat from "./slices/chat/chat";
import extras from "./slices/extras/extras";


export default combineReducers({
  authReducers,
  profileReducers,
  duelistReducers,
  newsPublication,
  gallery,
  meetings,
  events,
  electionReducers,
  ServiceRequestReducers,
  fundProjectReducers,
  chat,
  extras,
});
