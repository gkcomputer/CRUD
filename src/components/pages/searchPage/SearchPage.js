import "./SearchPage.css";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import mockdata from "../../../services/mastekData.json";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HistoryIcon from "@mui/icons-material/History";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchApi } from "../../store/actions/fetchApi.action";
import { searchApi, updateUser } from "../../store/actions/search.action";
import { emailSearch } from "../../store/actions/search.action";
import { printerSearch } from "../../store/actions/search.action";
import TransitionsModal from "../userUpdatePage/UpdateUserModal";
import DataGridTable from "../../datagrid/DataGridTable";

export const SearchPage = () => {
  const tableHeader = [
    "Mobile Username",
    "Email",
    "Fusion Username",
    "Printer",
    "From Date",
    "To Date",
    "Details",
    "History",
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi(data));
  }, []);

  const data = useSelector((state) => state.apiReducer.ApiData);
  const mobileuser = useSelector((state) => state.serarchData.mobileUser);
  const email = useSelector((state) => state.serarchData.email);
  const printer = useSelector((state) => state.serarchData.printer);

  const searchResult = data.filter((item) =>
    item.username.toLowerCase().includes(mobileuser)
  );

  const emailSearch = searchResult.filter((item) =>
    item.email.toLowerCase().includes(email)
  );

  // const printerSearch = emailSearch.filter((item) =>
  //   item.username.toLowerCase().includes(printer)
  // );

  const userCount = searchResult.length;

  const changeHandler = (event, name) => {
    if (name === "mobileuser") {
      dispatch(searchApi(event.target.value.toLowerCase()));
    }
    if (name === "email") {
      dispatch(emailSearch(event.target.value.toLowerCase()));
    }
    if (name === "printer") {
      dispatch(printerSearch(event.target.value.toLowerCase()));
    }
  };

  return (
    <div className="search_container">
      <div className="searchtitle_div">
        <p className="searchTitle">CRUD PROJECT</p>
      </div>
      <div className="searchInputs">
        <TextField
          className="textfeild"
          id="outlined-basic"
          label="Mobile Username"
          variant="outlined"
          onChange={(event, name = "mobileuser") => {
            changeHandler(event, name);
          }}
        />
        <TextField
          className="textfeild"
          id="outlined-basic"
          label="Fusion Username"
          variant="outlined"
          onChange={(event, name = "email") => {
            changeHandler(event, name);
          }}
        />
        <TextField
          className="textfeild"
          id="outlined-basic"
          label="Printer"
          variant="outlined"
          onChange={(event, name = "printer") => {
            changeHandler(event, name);
          }}
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
        <Button variant="contained" color="primary">
          Reset
        </Button>
      </div>
      <div className="tableHeadings">
        <div>
          <p className="userText">{`All Users: ${userCount} `}</p>
        </div>
        <div className="iconbtn_div">
          <IconButton className="iconbtn" sx={{ borderRadius: "0px" }}>
            <TransitionsModal />
          </IconButton>
          <IconButton className="iconbtn" sx={{ borderRadius: "0px" }}>
            Update
          </IconButton>
          <IconButton className="iconbtn" sx={{ borderRadius: "0px" }}>
            Export <FileUploadIcon />
          </IconButton>
        </div>
      </div>
      <DataGridTable />
    </div>
  );
};
