import { Grid, Radio, Text } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import Cookies from "js-cookie";
import Router from "next/router";
import React, { FormEvent, useState } from "react";
import { login } from "services/users";
import { notify } from "utils/functions";
import { fontSizing } from "utils/styles";
import { RadioWrapper1, RadioWrapper2 } from "./styles";

interface IProps {
  color?: string;
}

export default function FormInput({ color }: IProps) {
  const [checkedRadio, setCheckedRadio] = useState(false);
  const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
    try {
      form.preventDefault();
      const formData = new FormData(form.currentTarget);
      const nrp = formData.get("nrp");
      const password = formData.get("password");
      const response = await login({
        body: {
          nrp,
          password,
        },
        path: "/login",
      });

      Cookies.set("token", response.data.data.accessToken);
      Router.push("/dashboard");
      return notify("selamat kamu berhasil login", "success");
    } catch (error: any) {
      return notify(error.message, "error");
    }
  };
  const handleRadio = () => {
    setCheckedRadio(!checkedRadio);
  };
  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Grid container flexDirection="column" gap={50}>
        <Grid container flexDirection="column" gap={20}>
          <LabeledInput color={color} name="nrp" title="NRP" />
          <LabeledInput
            color={color}
            title="Password"
            name="password"
            type="password"
          />
          <RadioWrapper1
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Radio
              label="Remember me"
              onClick={handleRadio}
              checked={checkedRadio}
            />
            <Text variant="p" style={{ fontSize: fontSizing.xs.fontSize }}>
              Forgot password ?
            </Text>
          </RadioWrapper1>
          <RadioWrapper2
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Radio
              label="Remember me"
              onClick={handleRadio}
              checked={checkedRadio}
            />
            <Text variant="p" style={{ fontSize: fontSizing.xs.fontSize }}>
              Forgot password ?
            </Text>
          </RadioWrapper2>
        </Grid>
        <StyledButton>Login</StyledButton>
      </Grid>
    </form>
  );
}
