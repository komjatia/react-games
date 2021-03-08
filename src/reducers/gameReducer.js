const initState = {
  popular: [],
  newGames: [],
  upcomming: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gameReducer;
