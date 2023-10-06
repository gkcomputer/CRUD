export const searchApi = (event) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_API",
      payload: event,
    });
  };
};

export const emailSearch = (event) => {
  return (dispatch) => {
    dispatch({
      type: "EMAIL_SEARCH",
      payload: event,
    });
  };
};

export const printerSearch = (event) => {
  return (dispatch) => {
    dispatch({
      type: "PRINTER_SEARCH",
      payload: event,
    });
  };
};

export const updateUser = (item) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATEUSER",
      payload: item,
    });
  };
};

export const updateUserDetails = (item) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATEUSERDETAILS",
      payload: item,
    });
  };
};
