import styled from "styled-components";
import { CrudPaper } from "../../reusableComponents";
import Scrollbars from "react-custom-scrollbars";
import CustomDataGrid from "../../reusableComponents/CustomDataGrid/CustomDataGrid";
import { Checkbox, FormControlLabel } from "@mui/material";
import Header from "../../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer } from "react";

export default function AdminDashBoard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.ApiData);

  console.log("datajjjljljljljl", data);

  const differentCards = data.reduce((acc, current) => {
    if (acc[current.card]) {
      acc[current.card] += 1;
    } else {
      acc[current.card] = 1;
    }
    return acc;
  }, {});
  // Counting Active ,Deactive and Blocked users to update in Paper in dashboard
  const paperActiveCount = data.filter(
    (item) => item.status === "Active"
  ).length;
  const paperDeactiveCount = data.filter(
    (item) => item.status === "Deactive"
  ).length;
  const paperBlockedCount = data.filter(
    (item) => item.status === "Blocked"
  ).length;

  // const cards = Object.keys(differentCards);
  // const totalCards = Object.values(differentCards);
  const cardsTotal = Object.entries(differentCards);

  // useEffect(() => {
  //   let keys = [];
  //   let values = [];
  //   for (let key in differentCards) {
  //     keys.push(key);
  //     values.push(differentCards[key]);
  //   }
  //   console.log("keys", keys);
  // }, []);

  // let initialState = {
  //   ActiveData: [],
  // };
  // const [state, action] = useReducer(reducer, initialState);

  // const activeHandler = (e) => {
  //   if (e.target.Checked) {
  //     const activeData = data.filter((item) => item.status === "Active");
  //     dispatch({ type: "ACTIVE", Data: activeData });
  //   } else {
  //     const allData = data;
  //   }
  // };

  // const reducer = (action) => {
  //   switch (action.type) {
  //     case "ACTIVE":
  //       return {
  //         ...state,
  //         ActiveData: [...state.ActiveData, action.Data],
  //       };
  //     default:
  //       return state;
  //   }
  // };

  const PaperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const DashBoardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
  `;

  return (
    <>
      <DashBoardContainer>
        <PaperContainer>
          <CrudPaper elevation="5" margin="8px">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column ",
                width: "200px",
                height: "150px",
              }}
            >
              <p>Total Users</p>
              <div>{`${data.length}`}</div>
            </div>
          </CrudPaper>
          <CrudPaper elevation="5" margin="8px">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column ",
                width: "200px",
                height: "150px",
              }}
            >
              <p>Active Users</p>
              <div>{`${paperActiveCount}`}</div>
            </div>
          </CrudPaper>
          <CrudPaper elevation="5" margin="8px">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column ",
                width: "200px",
                height: "150px",
              }}
            >
              <p>Deactive Users</p>
              <div>{`${paperDeactiveCount}`}</div>
            </div>
          </CrudPaper>
          <CrudPaper elevation="5" margin="8px">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column ",
                width: "200px",
                height: "150px",
              }}
            >
              <p>Blocked Users</p>
              <div>{`${paperBlockedCount || 0}`}</div>
            </div>
          </CrudPaper>
          <CrudPaper elevation="5" margin="8px">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column ",
                width: "200px",
                height: "150px",
                overflow: "auto",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  borderBottom: "1px solid #f1ebeb",
                }}
              >
                <div>CARD</div>
                <div>NUMBER</div>
              </div>
              <Scrollbars style={{ width: "100%", height: "100%" }}>
                <div>
                  {cardsTotal.map(([key, value], i) => {
                    return (
                      <div
                        style={{ display: "flex", flexDirection: "row" }}
                        key={i}
                      >
                        <div
                          style={{
                            width: "75px",
                            paddingLeft: "20px",
                          }}
                        >
                          <p>{key.toLocaleUpperCase()}</p>
                        </div>
                        <div
                          style={{
                            width: "90px",
                            textAlign: "center",
                          }}
                        >
                          <p>{value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Scrollbars>
            </div>
          </CrudPaper>
        </PaperContainer>
        <div style={{ display: "flex" }}>
          <CrudPaper margin="0px 8px 0px 0px">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              Filter
            </div>
            <div
              style={{
                width: "154px",
                display: "flex",
                // alignItems: "start",
                flexDirection: "column",
              }}
            >
              <FormControlLabel
                // labelPlacement="start"
                label="Active"
                control={<Checkbox defaultChecked />}
              />
              <FormControlLabel
                // labelPlacement="start"
                label="Deactive"
                control={<Checkbox defaultChecked />}
              />
              <FormControlLabel
                // labelPlacement="start"
                label="Blocked"
                control={<Checkbox defaultChecked />}
              />
            </div>
          </CrudPaper>
          <CustomDataGrid />
        </div>
      </DashBoardContainer>
    </>
  );
}
