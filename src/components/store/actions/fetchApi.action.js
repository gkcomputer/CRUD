export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_API_LOADING",
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
      await dispatch(fetchApi());

      // const response = await fetch(process.env.REACT_APP_URL, {
      //   method: "GET",
      // });
      // const apidata = await response.json();
      // for (const key in apidata) {
      //   if (apidata[key].id === updateUser.id) {
      //     const updatedUserData = { ...apidata[key], ...updateUser };
      //     console.log("my updatedUserData", updatedUserData);
      //     await fetch(`${process.env.REACT_APP_PUT_URL}/${key}.json`, {
      //       method: "PUT",
      //       body: JSON.stringify(updatedUserData),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     });
      //   }
      //   await dispatch(fetchApi());
      // }
    } catch (error) {}
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
      await dispatch(fetchApi());
    } catch (error) {
      alert("Error in inserting the data");
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

export const delteUser = (idToDelete) => {
  console.log("delete", idToDelete);
  return async (dispatch) => {
    dispatch({
      type: "DELETING_USER",
      payload: true,
    });
    try {
      const response = await fetch(process.env.REACT_APP_URL, {
        method: "GET",
      });
      const data = await response.json();

      let keyToDelete = null;
      for (const key in data) {
        if (data[key].id === idToDelete.id) {
          keyToDelete = key;
          break; // Stop after finding the first match (assuming there's only one with id "123")
        }
      }

      if (keyToDelete) {
        // Perform the DELETE request for the specific item
        await fetch(`${process.env.REACT_APP_PUT_URL}/${keyToDelete}.json`, {
          method: "DELETE",
        });
      } else {
        console.log("Data not found.");
      }
      await dispatch(fetchApi());
      dispatch({
        type: "DELETING_USER",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "DELETING_USER",
        payload: false,
      });
    }
  };
};
