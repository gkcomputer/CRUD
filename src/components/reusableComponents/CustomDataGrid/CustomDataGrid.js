import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const columns = [
  { field: "fullName", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "card", headerName: "Card", width: 100 },
  { field: "start_date", headerName: "Start Date", width: 100 },
  { field: "expire_date", headerName: "Expire Date", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
];

export default function CustomDataGrid() {
  const data = useSelector((state) => state.apiReducer.ApiData);

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
        pagination={false}
        hideFooterPagination={true}
        hideFooter={true}
        hideFooterSelectedRowCount={true}
      />
    </Box>
  );
}
