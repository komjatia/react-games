const initState = {
  popular: [],
  newGames: [],
  upcomming: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcomming: action.payload.upcomming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

//Actions

export default gameReducer;
