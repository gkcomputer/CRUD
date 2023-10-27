import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { UpdateUser } from "./UpdateUser";
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

export default function UpdateUserModal() {
  const data = useSelector((state) => state.apiReducer.ApiData);
  const [open, setOpen] = React.useState(false);
  const [rowSelect, setRowSelect] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalClose = () => {
    setOpen(false);
  };

  const close = () => {
    setOpen(!open);
  };

  const filterData = data.filter((el) => {
    return el.checked === true;
  });

  React.useEffect(() => {
    if (filterData.length < 1 || filterData.length > 1) {
      setRowSelect(false);
    } else {
      return setRowSelect(true);
    }
  }, [filterData]);

  return (
    <div>
      {rowSelect ? (
        <Button
          onClick={handleOpen}
          className="iconbtn"
          sx={{ borderRadius: "5px" }}
          variant="contained"
        >
          Update <UpdateIcon fontSize="x-small" sx={{ padding: "5px" }} />
        </Button>
      ) : (
        <Button
          onClick={handleOpen}
          className="iconbtn"
          sx={{ borderRadius: "5px" }}
          variant="contained"
          disabled
        >
          Update <UpdateIcon fontSize="x-small" sx={{ padding: "5px" }} />
        </Button>
      )}

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
            <UpdateUser close={close} modalclose={modalClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
