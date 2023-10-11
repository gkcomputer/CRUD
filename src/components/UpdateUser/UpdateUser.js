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
import { useDispatch } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ToastContainer, toast } from "react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

export const UpdateUser = (props) => {
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
  const [input, setInput] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    card: "",
    start_date: "",
    expire_date: "",
    status: "",
  });

  function handleChange(e) {
    const newData = { ...input };
    newData[e.target.name] = e.target.value;
    setInput(newData);
  }

  const handleClear = () => {
    const clearData = {
      ...input,
      id: "",
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
    // dispatch(newUser(input));
    handleClear();
  }

  const toastfy = () => {
    toast.success("User Added Successfully");
    toast.error("Something went wrong..!");
  };

  return (
    <>
      <form onSubmit={submit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onClick={props.close}
        >
          <HighlightOffIcon fontSize="medium" />
        </div>
        <div className="row1">
          <div>
            <p className="text1">Update Details</p>
          </div>
          <div className="row1_btns">
            <BootstrapButton
              variant="contained"
              disableRipple
              type="submit"
              onClick={toastfy}
            >
              Save Changes
            </BootstrapButton>
            <ToastContainer
              position="top-center"
              theme="light"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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
            type="number"
            onChange={(e) => {
              handleChange(e);
            }}
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
            type="number"
            pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
            type="date"
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
            type="date"
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
              <MenuItem value={"active"}>active</MenuItem>
              <MenuItem value={"deactive"}>deactive</MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>
    </>
  );
};
