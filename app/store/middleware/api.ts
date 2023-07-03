import axios from "axios";
import * as actions from "../apiActions";

const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const {
      url,
      data,
      params,
      contentType,
      onSuccess,
      onError,
      onStart,
      method,
      extraheaders,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);
    try {
      let response;
      if (contentType) {
        console.log("sdfsdf");
        response = await axios.request({
          method,
          baseURL: "https://rel8-corporate-backend-production.up.railway.app/",
          url,
          params: params,
          data,
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "*/*",
            Authorization: extraheaders,
          },
        });
      } else {
        response = await axios.request({
          method,
          baseURL: "https://rel8-corporate-backend-production.up.railway.app/",
          url,
          params: params,
          data,
          headers: {
            "Content-Type": "application/json",
            Authorization: extraheaders,
            Accept: "*/*",
          },
        });
      }
      // Generalz

      // Default

      dispatch(actions.apiCallSuccess(response.data));
      console.log("res: ", response);
      // Specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
        // window.location.reload()
      }
    } catch (error: any) {
      dispatch({ type: onError, payload: error });
      console.log("        turep");
      // dispatch(actions.apiCallFailed(error));
      // if (onError) {
      // }
      // Default
      // Specific
    }
  };

export default api;
