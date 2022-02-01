import { Container } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import DialogBox from "../components/DialogBox";
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
  margin: 27px 0;
  flex-direction: column;
`;

const Main = () => {
  const [recent, setrecent] = useState(
    JSON.parse(localStorage.getItem("recent"))
  );
  const [dialogOpen, setDialogOpen] = useState(false);

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
    setDialogOpen(false);
    toast("All Numbers are Deleted");
  };

  const deleteRow = (index) => {
    var myArray = recent;
    var removedObject = myArray.splice(index, 1);
    console.log("removedObject :", JSON.stringify(removedObject));

    if (myArray.length <= 0) {
      cleanStorage();
    } else {
      var receiveddata = JSON.stringify(myArray);
      localStorage.setItem("recent", receiveddata);
      setrecent(JSON.parse(localStorage.getItem("recent")));
      toast(`${removedObject[0].number} are Deleted`);
    }
  };

  const openWhatsapp = ({ number, message,CCode }) => {
    console.log(number, message,CCode);
    var msg = "";
    if (message) {
      msg = `?text=${encodeURI(message)}`;
    }
    var time = new Date();
    updateStorage({ number, message, time,CCode });
    window.location.href = `http://wa.me/${CCode}${number}${msg}`;
  };

  return (
    <Container>
      <MainContainer>
        <Message openWhatsapp={openWhatsapp} />
        <RecentTable
          recent={recent}
          openWhatsapp={openWhatsapp}
          deleteRow={deleteRow}
          setDialogOpen={setDialogOpen}
        />
      </MainContainer>
      <DialogBox
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        cleanStorage={cleanStorage}
      />
    </Container>
  );
};
export default Main;
