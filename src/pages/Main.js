import { Container } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Message from "../components/Message";
import RecentTable from "../components/RecentTable";
toast.configure({
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  icon: "✅",
});
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
    toast("All Numbers are Deleted");
  };

  const deleteRow = (index) => {
    var myArray = recent;
    var removedObject = myArray.splice(index, 1);
    console.log('removedObject :',  JSON.stringify(removedObject));

    if (myArray.length <= 0) {
      cleanStorage();
    } else {
      var receiveddata = JSON.stringify(myArray);
      localStorage.setItem("recent", receiveddata);
      setrecent(JSON.parse(localStorage.getItem("recent")));
      toast(`${removedObject[0].number} are Deleted`);
    }
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
          deleteRow={deleteRow}
        />
      </MainContainer>
    </Container>
  );
};
export default Main;
