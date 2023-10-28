import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_API_LOADING",
      payload: true,
    });
    try {
      const response = await fetch(process.env.REACT_APP_URL, {
        method: "GET",
      });
      const apidata = await response.json();

      let usersData = [];

      for (const key in apidata) {
        const obj = { ...apidata[key], key };
        usersData.push(obj);
      }

      const finalData = usersData.map((el) => ({
        ...el,
        fullName: el.first_name + " " + el.last_name,
        checked: false,
      }));

      // const k = Object.keys(apidata)
      //   .map((el) => apidata[el])
      //   .flat();
      // const k = Object.values(apidata)[0];
      // const addData = k.map((el) => ({
      //   ...el,
      //   fullName: el.first_name + " " + el.last_name,
      //   checked: false,
      // }));

      dispatch({
        type: "FETCH_API_SUCCESS",
        payload: finalData,
      });
      dispatch({
        type: "FETCH_API_LOADING",
        payload: false,
      });
      toast.success("Data Fetch success", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_CENTER,
      });

      dispatch({
        type: "FETCH_API_FAILURE",
        payload: error,
      });
      dispatch({
        type: "FETCH_API_LOADING",
        payload: false,
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

export const editModal = (state) => {
  return (dispatch) => {
    dispatch({ type: "EDITMODAL", payload: state });
  };
};

export const editUser = (updateUser) => {
  return async (dispatch) => {
    try {
      await fetch(`${process.env.REACT_APP_PUT_URL}/${updateUser.key}.json`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("User Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      await dispatch(fetchApi());
      dispatch({
        type: "EDITUSER_STATUS",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "EDITUSER_STATUS",
        payload: true,
      });
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
};

export const newUserModal = (data) => {
  return (dispatch) => {
    dispatch({ type: "NEWUSER_MODAL", payload: data });
  };
};

export const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      await fetch(process.env.REACT_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      toast.success("User Added Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      await dispatch(fetchApi());
      dispatch({
        type: "ADD_USER_MODAL",
        payload: false,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch({
        type: "ADD_USER_MODAL",
        payload: true,
      });
    }
  };
};

export const userToDelete = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_USER",
      payload: data,
    });
  };
};

export const deleteModal = (state) => {
  return {
    type: "MODAL",
    payload: state,
  };
};

export const delteUser = (keyToDelete) => {
  return async (dispatch) => {
    try {
      await fetch(`${process.env.REACT_APP_PUT_URL}/${keyToDelete}.json`, {
        method: "DELETE",
      });

      dispatch({
        type: "USER_DELETED_MODAL",
        payload: false,
      });
      toast.success("User Deleted", {
        position: toast.POSITION.TOP_CENTER,
      });
      await dispatch(fetchApi());
    } catch (error) {
      dispatch({
        type: "USER_DELETED_MODAL",
        payload: true,
      });
      toast.error("User Not Deleted", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
};
