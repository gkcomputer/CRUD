export const nameSearch = (event) => {
  return (dispatch) => {
    dispatch({
      type: "NAME_SEARCH",
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

export const cardSearch = (event) => {
  return (dispatch) => {
    dispatch({
      type: "CARD_SEARCH",
      payload: event,
    });
  };
};

export const searchResult = (item) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_RESULT",
      payload: item,
    });
  };
};
