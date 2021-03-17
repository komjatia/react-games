import axios from "axios";
import { popularGamesURL, upcommingGamesURL, newGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcommingGamesData = await axios.get(upcommingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcomming: upcommingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
