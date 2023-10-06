import "./UpdateUser.css";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  const selectedrow = useSelector((state) => state.serarchData.selectedRow);

  const [input, setInput] = useState({
    username: "",
    email: "",
    fusion_username: "",
    printer: "",
    from_date: "",
    to_date: "",
  });

  console.log("input", input);

  useEffect(() => {
    setInput(selectedrow);
  }, [selectedrow]);

  function handleChange(e) {
    const newData = { ...input };
    newData[e.target.id] = e.target.value;
    setInput(newData);
  }

  function submit(e) {
    e.preventDefault();
    debugger;
    axios
      .post(
        "https://crud-project-35f4d-default-rtdb.firebaseio.com/updatedusers.json",
        input
      )
      .then(() => alert("successed"));
  }

  return (
    <form onSubmit={submit}>
      <div className="row1">
        <div>
          <p className="text1">Update User</p>
        </div>
        <div className="row1_btns">
          <BootstrapButton variant="contained" disableRipple type="submit">
            Confirm
          </BootstrapButton>
          <BootstrapButton variant="contained" disableRipple>
            Cancel
          </BootstrapButton>
        </div>
      </div>
      <div>
        <p className="text">User Details</p>
      </div>
      <div className="user_inputs">
        <TextField
          className="input_feild"
          placeholder="Username"
          id="username"
          value={input.username}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
        <TextField
          className="input_feild"
          placeholder="Fusion username"
          id="fusion_username"
          value={input.fusion_username}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
        <TextField
          className="input_feild"
          placeholder="Printer"
          id="printer"
          value={input.printer}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
        <TextField
          className="input_feild"
          placeholder="Password"
          id="password"
          value={"admin"}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
        <TextField
          className="input_feild"
          placeholder="Email ID"
          id="email"
          value={input.email}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
        <TextField
          className="input_feild"
          placeholder="From Date"
          id="from_date"
          value={input.from_date}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
        <TextField
          className="input_feild"
          placeholder="To Date"
          id="to_date"
          value={input.to_date}
          onChange={(e) => {
            handleChange(e);
          }}
        ></TextField>
      </div>
    </form>
  );
};
