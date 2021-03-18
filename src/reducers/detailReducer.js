const initialReduser = {
  detail: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialReduser, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screenshot: action.payload.screenshot,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

//Actions

export default detailReducer;
