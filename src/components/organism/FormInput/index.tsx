import { fontFamilies, Grid, Radio } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import Cookies from "js-cookie";
import Router from "next/router";
import React, { FormEvent } from "react";
import { login } from "services/users";
import { notify } from "utils/functions";
import { colors } from "utils/styles";

interface IProps {
  color?: string;
}

export default function FormInput({ color }: IProps) {
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
      return notify(nrp as string, "success");
    } catch (error: any) {
      return notify(error.message, "error");
    }
  };
  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Grid container flexDirection="column" gap={50}>
        <Grid container flexDirection="column" gap={20}>
          <LabeledInput color={color} label={true} name="nrp" title="NRP" />
          <LabeledInput
            color={color}
            label={true}
            title="Password"
            name="password"
          />
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            style={{
              fontSize: "13px",
              fontFamily: fontFamilies.poppins,
              color: colors.blue,
            }}
          >
            <Radio label="Remember me" />
            <p>Forgot password ?</p>
          </Grid>
        </Grid>
        <StyledButton>Masuk</StyledButton>
      </Grid>
    </form>
  );
}
