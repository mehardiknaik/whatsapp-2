import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Collapse,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import styled from "styled-components";
import relativeTime from "dayjs/plugin/relativeTime";
import Delete from "../images/delete.svg";
import DeleteAll from "../images/deleteAll.svg";
import Down from "../images/down.svg";
import Send from "../images/send.svg";
dayjs.extend(relativeTime);

const Buttoncontainer = styled.div`
  text-align: right;
  margin: 10px 0;
  & Button {
    gap: 15px;
  }
`;
const ExpandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & .Message {
    flex: 1;
  }
  & .ButtonContainer {
    display: flex;
    gap: 5px;
  }
`;

const RecentTable = ({ recent, openWhatsapp, deleteRow, setDialogOpen }) => {
  const [rowData, setrowData] = useState(null);

  return (
    <>
      {recent && (
        <>
          <Buttoncontainer>
            <Button onClick={() => setDialogOpen(true)}>
              clean all
              <img src={DeleteAll} width={11} height={11} alt="" />
            </Button>
          </Buttoncontainer>
          <TableContainer
            sx={{ backgroundColor: "transparent" }}
            component={Paper}
            variant="outlined"
          >
            <Table
              sx={{ minWidth: 100, backgroundColor: "transparent" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell align="center">Number</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recent.map((row, index) => (
                  <React.Fragment key={index}>
                    <TableRow sx={{ "& th,td": { borderBottom: "unset" } }}>
                      <TableCell component="th" scope="row">
                        {dayjs(row.time).fromNow()}
                      </TableCell>
                      <TableCell align="center" sx={{ whiteSpace: "pre" }}>
                        {row.CCode} {row.number}
                      </TableCell>
                      <TableCell
                        align="right"
                        onClick={() => setrowData(rowData === row ? null : row)}
                      >
                        <img
                          style={{
                            cursor: "pointer",
                            transition: "0.5s",
                            transform:
                              rowData === row ? "rotate(176deg)" : "rotate(0)",
                          }}
                          src={Down}
                          width={15}
                          height={15}
                          alt=""
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={3}
                      >
                        <Collapse
                          in={rowData === row}
                          timeout="auto"
                          unmountOnExit
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                        >
                          <ExpandContainer>
                            <div className="Message">{row.message}</div>
                            <div className="ButtonContainer">
                              <Button onClick={() => deleteRow(index)}>
                                <img
                                  src={Delete}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                              </Button>
                              <Button onClick={() => openWhatsapp(row)}>
                                <img src={Send} width={20} height={20} alt="" />
                              </Button>
                            </div>
                          </ExpandContainer>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
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
