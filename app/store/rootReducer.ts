import { combineReducers } from "redux";
import authReducers from "./slices/auth/auth";
import profileReducers from "./slices/profile/profile";
import newsPublication from "./slices/news_publication/news_publication";
import gallery from "./slices/gallery/gallerySlice";
import meetings from "./slices/meetings/meetingsSlice";
import events from "./slices/events/eventsSlice";
import duelistReducers from "./slices/due_list_and_owning_members/duelist";

export default combineReducers({
  authReducers,
  profileReducers,
  duelistReducers,
  newsPublication,
  gallery,
  meetings,
  events,
});
