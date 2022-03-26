import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
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
import { Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

  const navigate = useNavigate();

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
          <div className=" inline-flex  mx-auto">
            <div className=" mt-2 -translate-x-8">
              <Button variant="contained" color="primary" onClick={() => navigate("/adminhome")}>
                Back
              </Button>
            </div>
            <div>
              <h1 className=" ml-44 text-5xl text-lime-500 font-semibold">
                -Warehouse Inventory-
              </h1>
            </div>
          </div>
        </Box>
        <div className=" mx-32 mt-10">
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
                      <StyledTableCell align="right">
                        <div className=" pr-6 space-x-4">
                          <EditIcon className=" border bg-green-600 cursor-pointer" />
                          <DeleteIcon className=" border bg-red-600 cursor-pointer" />
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
          <div className=" mx-auto mt-10 text-right">
            <Button variant="contained" color="success" onClick={() => navigate("/create")}>
              Add Item
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
