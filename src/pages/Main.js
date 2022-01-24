import { Container } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Message from "../components/Message";
import RecentTable from "../components/RecentTable";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
`;

const Main = () => {
  const [recent, setrecent] = useState(
    JSON.parse(localStorage.getItem("recent"))
  );

  const updateStorage = (data) => {
    var newdata = recent;
    if (newdata) {
      newdata.unshift(data);
    } else {
      newdata = new Array(data);
    }

    var receiveddata = JSON.stringify(newdata);
    localStorage.setItem("recent", receiveddata);

    setrecent(JSON.parse(localStorage.getItem("recent")));
  };

  const cleanStorage = () => {
    localStorage.clear();
    setrecent(JSON.parse(localStorage.getItem("recent")));
  };

  const openWhatsapp = ({ number, message, time }) => {
    var msg = "";
    if (message) {
      msg = `?text=${encodeURI(message)}`;
    }
    updateStorage({ number, message, time });
    window.location.href = `http://wa.me/91${number}${msg}`;
  };

  return (
    <Container>
      <MainContainer>
        <Message openWhatsapp={openWhatsapp} />
        <RecentTable
          cleanStorage={cleanStorage}
          recent={recent}
          openWhatsapp={openWhatsapp}
        />
      </MainContainer>
    </Container>
  );
};

export default Main;
