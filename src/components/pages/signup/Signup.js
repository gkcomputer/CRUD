import styled from "styled-components";
import {
  CrudButton,
  CrudCustomForm,
  CrudInputFeild,
  CrudTypography,
} from "../../reusableComponents";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signupdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 1px solid gray;
  width: 400px;
  height: auto;
  border-radius: 15px;
`;

const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState("");

  const registerHandler = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const validation = (newUser) => {
    // const user = {};
    if (!newUser.email) {
      console.log("Email is requried");
    }
    if (!newUser.password) {
      console.log("password is requried");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newUser, returnSecureToken: false }),
        }
      );

      if (!response.ok) {
        // Handle non-successful responses (e.g., display an error message)
        const errorData = await response.json();
        const mes = errorData.error.errors; // this there any other way to destructer
        console.log("mess", mes);
        setError(mes[0].message);
        return;
      }

      console.log("User registered successfully");
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <CrudCustomForm onSubmit={submitHandler}>
        <Signupdiv>
          <CrudTypography
            customColor="red"
            fontFamily="sans-serif"
            fontWeight={900}
            fontSize="x-large"
          >
            Register
          </CrudTypography>
          <CrudTypography>please enter details</CrudTypography>
          {error && (
            <div
              style={{
                backgroundColor: "#ff9c84",
                width: "300px",
                height: "30px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "monospace",
                fontSize: "900",
              }}
            >
              <p>{error}</p>
            </div>
          )}
          <CrudInputFeild
            placeholder="email"
            name="email"
            onChange={registerHandler}
          ></CrudInputFeild>

          <CrudInputFeild
            placeholder="password"
            name="password"
            onChange={registerHandler}
          ></CrudInputFeild>

          <CrudButton type="submit">Submit</CrudButton>
          <CrudTypography>
            Already have an account ? <Link to="/Login">Login</Link>
          </CrudTypography>
        </Signupdiv>
      </CrudCustomForm>
    </div>
  );
};

export default Signup;
