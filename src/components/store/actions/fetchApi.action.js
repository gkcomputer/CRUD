import { generateUniqueText } from "../../../utils";

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_API_LOADING",
    });
    try {
      const response = await fetch(
        "https://crud-project-35f4d-default-rtdb.firebaseio.com/updatedusers.json",
        {
          method: "GET",
        }
      );
      const apidata = await response.json();
      // const k = Object.keys(apidata)
      //   .map((el) => apidata[el])
      //   .flat();
      const k = Object.values(apidata)[0];
      const addData = k.map((el) => ({
        ...el,
        checked: false,
        fullName: el.first_name + " " + el.last_name,
        id: el.id + generateUniqueText(),
      }));
      dispatch({
        type: "FETCH_API_SUCCESS",
        payload: addData,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_API_FAILURE",
        payload: error,
      });
    }
  };
};

export const filteredData = (item) => {
  return (dispatch) => {
    dispatch({
      type: "FILTEREDDATA",
      payload: item,
    });
  };
};

export const selectAll = (e) => {
  const selectAllCheck = e.target.checked;
  return (dispatch) => {
    dispatch({
      type: "SELECTALL",
      payload: selectAllCheck,
    });
  };
};

export const selectedRow = (e, id) => {
  const check = e.target.checked;
  return (dispatch) => {
    dispatch({
      type: "SELECTED_ROW",
      payload: { check: check, row: id },
    });
  };
};

export const newUser = (item) => {
  return (dispatch) => {
    dispatch({
      type: "NEWUSER",
      payload: item,
    });
  };
};
