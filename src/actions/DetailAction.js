import axios from "axios";
import { GameDetailURL } from "../api";

const getGameDetail = (id) => async (d) => {
  const detail = await axios.get(GameDetailURL);
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detail.data,
    },
  });
};
