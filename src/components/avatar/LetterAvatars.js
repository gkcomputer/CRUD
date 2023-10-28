import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Stack sx={{ display: "flex" }}>
        <p style={{ margin: "0px" }}>ADMIN</p>
        <p style={{ margin: "0px" }}>Hello! GK</p>
      </Stack>
      <Avatar sx={{ bgcolor: "#0480FC" }}>GK</Avatar>
    </Stack>
  );
}
