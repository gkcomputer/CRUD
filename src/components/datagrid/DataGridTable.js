import * as React from "react";
import axios from "axios";
import mockData from "../../services/MOCK_DATA.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApi,
  selectAll,
  selectedRow,
} from "../store/actions/fetchApi.action";
import { Box, Checkbox, Pagination, TablePagination } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicTable() {
  const [page, pageChange] = React.useState(0);
  const [rowsPerPage, rowsPerPageChange] = React.useState(5);
  const data = useSelector((state) => state.apiReducer.ApiData);
  const dispatch = useDispatch();

  const columns = [
    {
      column: "Select",
      type: "checkbox",
      width: "10px",
    },
    { column: "Name", width: "10px" },
    { column: "Email", width: "100px" },
    { column: "Phone", width: "10px" },
    { column: "Card", width: "1px" },
    { column: "Start Date", width: "30px" },
    { column: "Expire Date", width: "30px" },
    { column: "Status", width: "30px" },
    { column: "Delete", width: "30px" },
  ];

  React.useEffect(() => {
    dispatch(fetchApi(data));
  }, []);

  React.useEffect(() => {
    pageChange(0);
  }, [data.length]);

  const handlePageChange = (event, newpage) => {
    pageChange(newpage);
  };

  const handleChangeRowsPerPage = (event) => {
    rowsPerPageChange(+event.target.value);
    pageChange(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((el, i) => {
                return (
                  <TableCell sx={{ fontWeight: 700 }} key={i}>
                    {el.type === "checkbox" ? (
                      <Checkbox
                        sx={{
                          color: "#1e88e5",
                          "&.Mui-checked": {
                            color: "#1e88e5",
                          },
                        }}
                        onClick={(e) => {
                          dispatch(selectAll(e));
                        }}
                      />
                    ) : (
                      el.column
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length >= 1 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id + 1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Checkbox
                        sx={{
                          color: "#1e88e5",
                          "&.Mui-checked": {
                            color: "#1e88e5",
                          },
                        }}
                        color="default"
                        checked={row.checked}
                        onClick={(e) => {
                          dispatch(selectedRow(e, row.id));
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {row.fullName}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.card}</TableCell>
                    <TableCell align="left">{row.start_date}</TableCell>
                    <TableCell align="left">{row.expire_date}</TableCell>
                    <TableCell align="left">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CircleIcon
                          sx={{
                            fontSize: "small",
                            padding: "5px",
                            color:
                              row.status === "Active"
                                ? "green"
                                : "" || row.status === "Deactive"
                                ? "red"
                                : "black",
                          }}
                        />
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>No Records Found</h3>
              </Box>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TablePagination
          component="div"
          page={page}
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          count={data.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Box>Page:{page + 1}</Box>
      </Box>
    </>
  );
}
