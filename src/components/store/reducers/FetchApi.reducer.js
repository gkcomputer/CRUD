const initialState = {
  ApiData: [],
};

export const FetchaApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_API_LOADING":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_API_SUCCESS":
      return {
        ...state,
        ApiData: action.payload,
        error: null,
      };
    case "FETCH_API_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
