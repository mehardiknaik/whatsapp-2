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
import relativeTime from "dayjs/plugin/relativeTime";
import Delete from "../images/delete.svg";
import DeleteAll from "../images/deleteAll.svg";

dayjs.extend(relativeTime);

const Buttoncontainer = styled.div`
  text-align: right;
`;

const RecentTable = ({ cleanStorage, recent, openWhatsapp, deleteRow }) => {
  return (
    <>
      {recent && (
        <>
          <Buttoncontainer>
            <Button onClick={cleanStorage}>
              clean all
              <img src={DeleteAll} width={20} height={20} alt="" />
            </Button>
          </Buttoncontainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 40 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell align="center">Number</TableCell>
                  <TableCell align="center">Message</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recent.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {dayjs(row.time).fromNow()}
                    </TableCell>
                    <TableCell
                      onClick={() => openWhatsapp(row)}
                      style={{ cursor: "pointer" }}
                      align="center"
                    >
                      {row.number}
                    </TableCell>
                    <TableCell align="right">{row.message}</TableCell>
                    <TableCell align="right" onClick={() => deleteRow(index)}>
                      <img
                        style={{ cursor: "pointer" }}
                        src={Delete}
                        width={20}
                        height={20}
                        alt=""
                      />
                    </TableCell>
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
