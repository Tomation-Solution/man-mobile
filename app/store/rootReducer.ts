import { combineReducers } from "redux";
import authReducers from "./slices/auth/auth";
import profileReducers from "./slices/profile/profile";
import newsPublication from "./slices/news_publication/news_publication";
import gallery from "./slices/gallery/gallerySlice";
import meetings from "./slices/meetings/meetingsSlice";
import events from "./slices/events/eventsSlice";
import electionReducers from "./slices/elections/election";
import ServiceRequestReducers from "./slices/ServiceRequest/Servicerequest";

export default combineReducers({
  authReducers,
  profileReducers,
  newsPublication,
  gallery,
  meetings,
  events,
  electionReducers,
  ServiceRequestReducers
});
