import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { AddUser } from "./AddUser";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.apiReducer.userAdded);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const close = () => {
    setOpen(!open);
  };

  React.useMemo(() => {
    if (user) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [user]);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="iconbtn"
        sx={{ borderRadius: "5px" }}
        variant="contained"
      >
        Add <PersonAddAltIcon fontSize="x-small" sx={{ padding: "5px" }} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AddUser close={close} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
