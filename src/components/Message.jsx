import {
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import Send from "../images/send.svg";
import { Countries } from "./Data/Countries";

const MainContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const NumberContainer = styled.div`
  display: flex;
  gap: 20px;
`;
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
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    const { number, message } = data;
    openWhatsapp(data);
  };
  return (
    <MainContainer onSubmit={handleSubmit(onSubmit)}>
      <NumberContainer>
        <FormControl sx={{ width: "40%" }}>
          <InputLabel id="demo-simple-select-label">Country Code</InputLabel>
          <Controller
            name="CCode"
            control={control}
            // rules={{ required: true }}
            defaultValue={91}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                label="Campaign Budget"
                labelId="campaign_budget_label"
              >
                {Countries.map((country) => (
                  <MenuItem value={country.Code} key={country.Code}>
                    {country.Name} {country.Code}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Phone no"
          type="number"
          variant="outlined"
          sx={{ width: "60%" }}
          {...register("number", { required: true, pattern: /(7|8|9)\d{9}$/ })}
        />
      </NumberContainer>
      <TextField
        id="outlined-multiline-static"
        label="Message (Optional)"
        multiline
        rows={4}
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
