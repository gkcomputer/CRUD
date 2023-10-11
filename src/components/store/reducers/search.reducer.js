const initialState = {
  fullname: "",
  email: "",
  card: "",
  selectedRow: {},
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME_SEARCH":
      return {
        ...state,
        fullname: action.payload,
      };
    case "EMAIL_SEARCH":
      return {
        ...state,
        email: action.payload,
      };
    case "CARD_SEARCH":
      return {
        ...state,
        card: action.payload,
      };

    default:
      return state;
  }
};
