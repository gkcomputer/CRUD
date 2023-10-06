import mockData from "../../../services/mastekData.json";

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_API_LOADING",
    });
    try {
      const apidata = mockData;
      dispatch({
        type: "FETCH_API_SUCCESS",
        payload: apidata,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_API_FAILURE",
        payload: error,
      });
    }
  };
};
