const initialState = {
  mobileUser: "",
  email: "",
  printer: "",
  selectedRow: {},
  updateUserDetails: {},
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_API":
      return {
        ...state,
        mobileUser: action.payload,
      };
    case "EMAIL_SEARCH":
      return {
        ...state,
        email: action.payload,
      };
    case "PRINTER_SEARCH":
      return {
        ...state,
        printer: action.payload,
      };
    case "UPDATEUSER":
      return {
        ...state,
        selectedRow: action.payload,
      };
    case "UPDATEUSERDETAILS":
      return {
        ...state,
        updateUserDetails: action.payload,
      };
    default:
      return state;
  }
};
