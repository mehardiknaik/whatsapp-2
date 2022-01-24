import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

const Buttoncontainer = styled.div`
  text-align: right;
`;

const RecentTable = ({ cleanStorage, recent }) => {
  return (
    <>
      {recent && (
        <>
          <Buttoncontainer>
            <Button onClick={cleanStorage}>clean all</Button>
          </Buttoncontainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 40 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="right">Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recent.map((row) => (
                  <TableRow
                    key={row.number}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.number}
                    </TableCell>
                    <TableCell align="center">
                      {dayjs(row.time).format("DD-MMM-YYYY h:mm A")}
                    </TableCell>
                    <TableCell align="right">{row.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default RecentTable;
