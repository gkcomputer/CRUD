import "./UpdateUser.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { editModal, editUser } from "../store/actions/fetchApi.action";
import CloseIcon from "@mui/icons-material/Close";

export const UpdateUser = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.filterData);

  // Move the useState hook to the top and initialize the state
  const [input, setInput] = useState(() => {
    if (!data || data.length === 0) {
      return {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        card: "",
        start_date: "",
        expire_date: "",
        status: "",
        key: null,
        checked: false,
      };
    } else {
      const filterData = data.find((el) => el.checked === true);
      return {
        id: filterData.id || "",
        first_name: filterData.first_name || "",
        last_name: filterData.last_name || "",
        email: filterData.email || "",
        phone: filterData.phone || "",
        card: filterData.card || "",
        start_date: filterData.start_date || "",
        expire_date: filterData.expire_date || "",
        status: filterData.status || "",
        key: filterData.key,
        checked: false,
      };
    }
  });

  function handleChange(e) {
    const newData = { ...input };
    newData[e.target.name] = e.target.value;
    setInput(newData);
  }

  const handleClear = () => {
    const clearData = {
      ...input,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      card: "",
      start_date: "",
      expire_date: "",
      status: "",
    };

    setInput(clearData);
  };

  function submit(e) {
    e.preventDefault();
    dispatch(editUser(input));
  }

  return (
    <>
      <form onSubmit={submit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon
            sx={{
              "&:hover": {
                color: "white",
                background: "#BCBCBB",
                borderRadius: "15px",
              },
            }}
            onClick={() => {
              dispatch(editModal(false));
            }}
            fontSize="medium"
          />
        </div>
        <div className="row1">
          <div>
            <p className="text1">Update Details</p>
          </div>
          <div className="row1_btns">
            <BootstrapButton variant="contained" disableRipple type="submit">
              Save
            </BootstrapButton>
            <ToastContainer />
            <BootstrapButton
              variant="contained"
              disableRipple
              onClick={handleClear}
            >
              Clear
            </BootstrapButton>
          </div>
        </div>

        <div className="user_inputs">
          <TextField
            className="input_feild"
            placeholder="ID"
            name="id"
            value={input.id}
            required
            type="text"
          ></TextField>
          <TextField
            className="input_feild"
            placeholder="First Name"
            name="first_name"
            value={input.first_name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>

          <TextField
            className="input_feild"
            placeholder="Last Name"
            name="last_name"
            value={input.last_name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>
          <TextField
            className="input_feild"
            placeholder="Email"
            name="email"
            value={input.email}
            required
            type="email"
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>
          <TextField
            className="input_feild"
            placeholder="Phone"
            name="phone"
            type="text"
            value={input.phone}
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>
          <TextField
            className="input_feild"
            placeholder="Card"
            name="card"
            required
            value={input.card}
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>
          <TextField
            className="input_feild"
            placeholder="Start Date"
            name="start_date"
            type="text"
            required
            value={input.start_date}
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>
          <TextField
            className="input_feild"
            placeholder="Expire Date"
            name="expire_date"
            type="text"
            required
            value={input.expire_date}
            onChange={(e) => {
              handleChange(e);
            }}
          ></TextField>

          <FormControl sx={{ m: 0, minWidth: 350 }}>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              name="status"
              value={input.status}
              label="status"
              onChange={(event) => {
                handleChange(event);
              }}
            >
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Deactive"}>Deactive</MenuItem>
              <MenuItem value={"Blocked"}>Blocked</MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>
    </>
  );
};
