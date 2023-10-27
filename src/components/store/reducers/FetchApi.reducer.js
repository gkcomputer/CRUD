const initialState = {
  ApiData: [],
  selectedRow: {},
  deleteUser: null,
  modalShow: false,
  isLoading: true,
  userAdded: false,
};

export const FetchaApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_API_LOADING":
      return {
        ...state,
        isLoading: action.payload,
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
    case "FILTEREDDATA":
      return {
        ...state,
        ApiData: action.payload,
      };
    case "SELECTALL":
      const updated = state.ApiData.map((el) => ({
        ...el,
        checked: action.payload,
      }));
      return { ...state, ApiData: updated };

    case "ADD_USER":
      return {
        ...state,
        userAdded: action.payload,
      };

    case "DELETE_USER":
      return {
        ...state,
        deleteUser: action.payload,
      };
    case "MODAL":
      return {
        ...state,
        modalShow: action.payload,
      };

    case "SELECTED_ROW":
      const ID = action.payload.row;
      const selectrow = state.ApiData.find(
        (el) => el.id === action.payload.row
      );
      const checkedRow =
        selectrow.checked === false
          ? {
              ...selectrow,
              checked: action.payload.check,
            }
          : {
              ...selectrow,
              checked: action.payload.check,
            };

      const upDatedData = state.ApiData.map((el) => {
        if (ID === el.id) {
          return { ...el, ...checkedRow };
        } else {
          return el;
        }
      });
      return {
        ...state,
        selectedRow: checkedRow,
        ApiData: upDatedData,
      };

    default:
      return state;
  }
};
