export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_API_LOADING",
    });
    try {
      const response = await fetch(
        "https://crud-project-35f4d-default-rtdb.firebaseio.com/userData.json",
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
        fullName: el.first_name + " " + el.last_name,
        checked: false,
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

// const postData = mockData;

// const apiUrl =
//   "https://crud-project-35f4d-default-rtdb.firebaseio.com/userData.json"; // Replace with your API endpoint

// const p = () => {
//   axios
//     .post(apiUrl, postData)
//     .then((response) => {
//       console.log("POST request successful:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
// p();

export const addNewUser = (user) => {
  console.log("newUser", user);
  return async (dispatch) => {
    dispatch({
      type: "ADDING_USER",
    });
    try {
      const response = await fetch(
        "https://crud-project-35f4d-default-rtdb.firebaseio.com/abdul.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      debugger;
      if (response.ok === 200) {
        console.log("data inserted successfully");
      }
      const data = await response.json();
      dispatch({
        type: "ADD_USER",
        payload: data,
      });
    } catch (error) {
      alert("Error in inserting the data");
    }
  };
};

// export const addNewUser = (user) => {
//   debugger;
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         "https://crud-project-35f4d-default-rtdb.firebaseio.com/newUsers.json",
//         user,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         console.log("Data inserted successfully");
//       } else {
//         console.error("Failed to insert data");
//       }

//       const data = response.data;

//       dispatch({
//         type: "ADD_USER",
//         payload: data,
//       });
//     } catch (error) {
//       console.error("Error in inserting the data:", error);
//       alert("Error in inserting the data");
//     }
//   };
// };

// // Usage: Call the function with the data to be added
// addNewUser(mockData);
