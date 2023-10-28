import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { AddUser } from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import { newUserModal } from "../../store/actions/fetchApi.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 740,
  height: 450,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 20,
  p: 4,
  borderRadius: "15px",
};

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apiReducer.userModal);

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(newUserModal(true));
        }}
        className="iconbtn"
        sx={{ borderRadius: "5px" }}
        variant="contained"
      >
        Add <PersonAddAltIcon fontSize="x-small" sx={{ padding: "5px" }} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state}
        onClose={() => {
          dispatch(newUserModal(false));
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={state}>
          <Box sx={style}>
            <AddUser />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
