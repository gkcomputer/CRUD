import { Button } from "@mui/material";
import styled from "styled-components";

const CustomButtonStyles = styled(Button)`
  background: #03a9f4; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  :hover {
    border-color: red;
  }
`;

export default CustomButtonStyles;
