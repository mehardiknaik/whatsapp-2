import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
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
      newdata.push(data);
    } else {
      var newdata = new Array(data);
    }

    var receiveddata = JSON.stringify(newdata);
    localStorage.setItem("recent", receiveddata);

    setrecent(JSON.parse(localStorage.getItem("recent")));
  };

  const cleanStorage=()=>{
    localStorage.clear();
    setrecent(JSON.parse(localStorage.getItem("recent")));
  }

  return (
    <Container>
      <MainContainer>
        <Message updateStorage={updateStorage}  />
        <RecentTable cleanStorage={cleanStorage} recent={recent}/>
      </MainContainer>
    </Container>
  );
};

export default Main;
