import axios from "axios";
import { GameDetailURL, GameScreenshotURL } from "../api";

export const getGameDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detail = await axios.get(GameDetailURL(id));
  const screenshot = await axios.get(GameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detail.data,
      screenshot: screenshot.data,
    },
  });
};
