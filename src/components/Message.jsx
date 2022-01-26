import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import Send from "../images/send.svg";

const Formcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ButtonText = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 10px 0;
`;
const move = keyframes`
0% { transform: translateX(0px);}
50% { transform: translateX(0px);}
75% { transform: translateX(-15px);}
84% { transform: translateX(0px);}
92% { transform: translateX(-15px);}
100% { transform: translateX(0px);}
`;
const ButtonIcon = styled.div`
  display: flex;
  animation: ${move} 4s infinite forwards;
`;

const Message = ({ openWhatsapp }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { number, message } = data;
    var time = new Date();
    openWhatsapp({ number, message, time });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Formcontainer>
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
      </Formcontainer>
    </form>
  );
};

export default Message;
