import * as React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export default function CrudPaper({
  children,
  boxStyles,
  paperStyles,
  elevation,
  margin,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: { margin },
        },
        ...boxStyles,
      }}
    >
      <Paper elevation={elevation} sx={{ ...paperStyles }}>
        {children}
      </Paper>
    </Box>
  );
}
