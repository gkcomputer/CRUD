import styled from "styled-components";
import { Typography } from "@mui/material";

const CrudTypography = styled(Typography)`
  ${({ theme, customColor }) => `
    color:${theme.fontColor[customColor] || theme.fontColor.lightBlue}
    
`}
`;

export default CrudTypography;
