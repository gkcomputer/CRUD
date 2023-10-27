import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Box, Checkbox, Stack, TablePagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteModal, delteUser } from "../../store/actions/fetchApi.action";

function UserDeleteModal() {
  const row = useSelector((state) => state.apiReducer.deleteUser);
  const modalopen = useSelector((state) => state.apiReducer.modalShow);
  const handleClose = () => {
    dispatch(deleteModal(false));
  };
  const dispatch = useDispatch();

  // console.log("modalOpen", modalopen);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    borderRadius: "15px",
    p: 3,
  };

  if (!row) return;
  return (
    <Stack>
      <Modal
        // keepMounted
        open={modalopen}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        key={row.id}
      >
        <Stack sx={style}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
            variant="h4"
          >
            Delete User
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontVariant: "all-small-caps",
            }}
          >
            <Box>
              <Typography variant="h5">Name</Typography>
              <Typography variant="h5">Email</Typography>
              <Typography variant="h5">Phone</Typography>
              <Typography variant="h5">Card</Typography>
              <Typography variant="h5">Status</Typography>
            </Box>
            <Box>
              <Typography variant="h5">{row.fullName}</Typography>
              <Typography variant="h5">{row.email}</Typography>
              <Typography variant="h5">{row.phone}</Typography>
              <Typography variant="h5">{row.card}</Typography>
              <Typography variant="h5">{row.status}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              p: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                dispatch(delteUser(row));
                // console.log("deleteRow", row.fullName);
              }}
            >
              Confirm
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(deleteModal(false));
              }}
            >
              Cancel
            </Button>
          </Box>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default UserDeleteModal;
