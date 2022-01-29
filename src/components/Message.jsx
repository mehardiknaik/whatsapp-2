import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import Send from "../images/send.svg";

const MainContainer=styled.form`
display: flex;
flex-direction: column;
gap: 20px;
`
const ButtonText = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 10px 0;
`;
const move = keyframes`
0%,50%,84% ,100% { transform: translateX(0px);}
75%,92% { transform: translateX(-15px);}
`;
const ButtonIcon = styled.div`
  display: flex;
  animation: ${move} 4s infinite forwards;
`;

const Message = ({ openWhatsapp }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { number, message } = data;
    openWhatsapp({ number, message });
  };
  return (
    <MainContainer onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Phone no"
          type="number"
          variant="outlined"
          {...register("number", { required: true, pattern: /(7|8|9)\d{9}$/ })}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message (Optional)"
          multiline
          rows={4}
          // defaultValue="Default Value"
          {...register("message")}
        />
        <Button type="submit" variant="text">
          <ButtonText>Send Message</ButtonText>
          <ButtonIcon>
            <img src={Send} width={20} height={20} alt="" />
          </ButtonIcon>
        </Button>
    </MainContainer>
  );
};

export default Message;
