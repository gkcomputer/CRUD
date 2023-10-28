const initialState = {
  ApiData: [],
  filterData: [],
  selectedRow: {},
  deleteUser: null,
  isLoading: true,
  userModal: false,
  deleteModal: false,
  modalShow: false,
  editModal: false,
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
        filterData: action.payload,
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
        filterData: action.payload,
      };
    case "SELECTALL":
      const updated = state.filterData.map((el) => ({
        ...el,
        checked: action.payload,
      }));
      return { ...state, filterData: updated };

    case "NEWUSER_MODAL":
      return {
        ...state,
        userModal: action.payload,
      };
    case "ADD_USER_MODAL":
      return {
        ...state,
        userModal: action.payload,
      };

    case "DELETE_USER":
      return {
        ...state,
        deleteUser: action.payload,
      };
    case "USER_DELETED_MODAL":
      return {
        ...state,
        deleteModal: action.payload,
      };
    case "MODAL":
      return {
        ...state,
        modalShow: action.payload,
      };
    case "EDITMODAL":
      return {
        ...state,
        editModal: action.payload,
      };
    case "EDITUSER_STATUS":
      return {
        ...state,
        editModal: action.payload,
      };

    case "SELECTED_ROW":
      const ID = action.payload.row;
      const selectrow = state.filterData.find(
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

      const upDatedData = state.filterData.map((el) => {
        if (ID === el.id) {
          return { ...el, ...checkedRow };
        } else {
          return el;
        }
      });
      return {
        ...state,
        selectedRow: checkedRow,
        filterData: upDatedData,
      };

    default:
      return state;
  }
};
