const initialState = {
  ApiData: [],
  selectedRow: {},
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
      console.log("data", action.payload);
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

    case "NEWUSER":
      return {
        ...state,
        ApiData: [...state.ApiData, { ...action.payload }],
      };
    case "SELECTED_ROW":
      const ID = action.payload.row;
      const selectrow = state.ApiData.find(
        (el) => el.id === action.payload.row
      );

      console.log("selectrow.checked", typeof selectrow.checked);
      debugger;
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

      console.log("upDatedData", upDatedData);

      return {
        ...state,
        selectedRow: checkedRow,
        ApiData: upDatedData,
      };

    default:
      return state;
  }
};
