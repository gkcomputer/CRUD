import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import qr from "../../../assests/qr.png";
import { Button } from "@mui/material";
import "./Custom.Login.css";
import { validation } from "./Validation";

export const CrudLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [values, setValues] = React.useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});
  console.log("Error", errors);

  const handler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    setErrors(validation(values));
    event.preventDefault();
  };

  return (
    <div className="maindiv">
      <div className="scanner">
        <p>Connect through scanner</p>
        <img className="qrimg" src={qr} alt="" />
      </div>
      <div className="inputFeilds">
        <FormControl sx={{ gap: "30px" }}>
          <TextField
            label="User Name"
            variant="outlined"
            required
            name="name"
            value={values.name}
            onChange={handler}
          ></TextField>
          {errors.name && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
          )}
          <FormControl sx={{ m: 0, width: "225px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              name="password"
              value={values.password}
              onChange={handler}
              required
            >
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    //   onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {errors.password && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
          )}

          <Button variant="contained" color="primary" onClick={submit}>
            Login
          </Button>
        </FormControl>
      </div>
      <div className="footer"></div>
    </div>
  );
};
