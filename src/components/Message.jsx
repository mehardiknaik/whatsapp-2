import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Formcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Message = ({ openWhatsapp}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { number, message } = data;
    var time=new Date()
    openWhatsapp({ number, message,time });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Formcontainer>
        <TextField
          id="outlined-basic"
          label="Phone no"
          type="number"
          variant="outlined"
          {...register("number", { required: true, pattern: /(7|8|9)\d{9}/ })}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          // defaultValue="Default Value"
          {...register("message")}
        />
        <Button type="submit" variant="text">
          Send Message
        </Button>
      </Formcontainer>
    </form>
  );
};

export default Message;
