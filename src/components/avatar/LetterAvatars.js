import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function EmployeeAvatars() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <Stack sx={{ display: "flex" }}>
        <p style={{ margin: "0px" }}>ADMIN</p>
        <p style={{ margin: "0px" }}>Hello! GK</p>
      </Stack>
      <Avatar sx={{ bgcolor: "#0480FC" }}>GK</Avatar>
    </Stack>
  );
}
