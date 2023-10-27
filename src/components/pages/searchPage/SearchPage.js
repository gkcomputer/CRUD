import React, { useEffect, useState } from "react";
import logo from "../../../assests/logo.jpg";
import { Button, TextField } from "@mui/material";
import DataGridTable from "../../datagrid/DataGridTable";
import { useDispatch, useSelector } from "react-redux";
import {
  cardSearch,
  emailSearch,
  nameSearch,
} from "../../store/actions/search.action";
import { fetchApi, filteredData } from "../../store/actions/fetchApi.action";
import TransitionsModal from "../AddUserModal/AddUserModal";
import UpdateUserModal from "../../UpdateUser/UpdateUserModal";

function SearchPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.ApiData);
  const nameInput = useSelector((state) => state.serarchData.fullname);
  const emailInput = useSelector((state) => state.serarchData.email);
  const cardInput = useSelector((state) => state.serarchData.card);

  useEffect(() => {
    if (nameInput === "" && emailInput === "" && cardInput === "") {
      dispatch(fetchApi(data));
      return;
    }
  }, [nameInput, emailInput, cardInput]);

  const handleSerachClick = () => {
    const nameFilter = data.filter((item) =>
      item.fullName.toLowerCase().includes(nameInput.toLowerCase())
    );
    const emailFilter = nameFilter.filter((item) =>
      item.email.toLowerCase().includes(emailInput.toLowerCase())
    );
    const cardFilter = emailFilter.filter((item) =>
      item.card.toLowerCase().includes(cardInput.toLowerCase())
    );
    dispatch(filteredData(cardFilter));
  };

  const handleResetClick = () => {
    dispatch(fetchApi(data));
    dispatch(nameSearch(""));
    dispatch(emailSearch(""));
    dispatch(cardSearch(""));
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          padding: "10px 30px 10px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <img
            src={logo}
            alt="logo"
            width={150}
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "30px",
            }}
          >
            <TextField
              label="Full Name"
              id="outlined-size-small"
              size="small"
              value={nameInput}
              onChange={(e) => {
                dispatch(nameSearch(e.target.value));
              }}
              autoFocus
            />
            <TextField
              label="Email"
              id="outlined-size-small"
              size="small"
              value={emailInput}
              onChange={(e) => {
                dispatch(emailSearch(e.target.value));
              }}
            />
            <TextField
              label="Card"
              id="outlined-size-small"
              size="small"
              value={cardInput}
              onChange={(e) => {
                dispatch(cardSearch(e.target.value));
              }}
            />
            <Button variant="contained" onClick={handleSerachClick}>
              Search
            </Button>
            <Button variant="contained" onClick={handleResetClick}>
              Reset
            </Button>

            <TransitionsModal />

            <UpdateUserModal />

            <Button variant="contained">Export</Button>
          </div>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "30px",
              // borderLeft: "1px solid #c7b9b9",
              // paddingLeft: "10px",
            }}
          ></div> */}
        </div>
        <div>
          <DataGridTable />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
