import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { UpdateUser } from "./UpdateUser";
import { useDispatch, useSelector } from "react-redux";
import { editModal } from "../store/actions/fetchApi.action";

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
  const data = useSelector((state) => state.apiReducer.filterData);
  const editStatus = useSelector((state) => state.apiReducer.editModal);
  const dispatch = useDispatch();
  const [rowSelect, setRowSelect] = React.useState();

  console.log("editStatus", editStatus);

  // React.useEffect(() => {
  //   if (editStatus) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // }, [editStatus]);

  const rowCheck = data.filter((el) => {
    return el.checked === true;
  });

  React.useEffect(() => {
    if (rowCheck.length < 1 || rowCheck.length > 1) {
      setRowSelect(false);
    } else {
      return setRowSelect(true);
    }
  }, [rowCheck]);

  return (
    <div>
      {rowSelect ? (
        <Button
          onClick={() => {
            dispatch(editModal(true));
          }}
          className="iconbtn"
          sx={{ borderRadius: "5px" }}
          variant="contained"
        >
          Update <UpdateIcon fontSize="x-small" sx={{ padding: "5px" }} />
        </Button>
      ) : (
        <Button
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
        open={editStatus}
        onClose={() => {
          dispatch(editModal(false));
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={editStatus}>
          <Box sx={style}>
            <UpdateUser />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
