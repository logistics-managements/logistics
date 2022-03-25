import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Inventory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/logistics/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  return (
    <>
      <div>
        <Box
          sx={{
            px: 20,
            py: 4,
            color: "red",
            border: 1,
            borderColor: "primary.main",
          }}
        >
          <h1 className=" text-center text-5xl text-lime-500 font-semibold">
            -Warehouse Inventory-
          </h1>
        </Box>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>PID</StyledTableCell>
                  <StyledTableCell align="right">P.Name</StyledTableCell>
                  <StyledTableCell align="right">Avail.C</StyledTableCell>
                  <StyledTableCell align="right">Unit.price</StyledTableCell>
                  <StyledTableCell align="right">Demand</StyledTableCell>
                  <StyledTableCell align="right">Update/Remove</StyledTableCell>
                </TableRow>
              </TableHead>

              {data.map((value) => {
                return (
                  <TableBody>
                    <StyledTableRow key={value?._id}>
                      <StyledTableCell component="th" scope="row">
                        {value?.pID}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.pName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.unitPrice}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.demand}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Inventory;
