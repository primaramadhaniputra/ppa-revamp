import { Grid } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import Cookies from "js-cookie";
import Router from "next/router";
import React, { FormEvent } from "react";
import { changePassword } from "services/users";
import { notify, parseJwt } from "utils/functions";
import { fontWeights } from "utils/styles";
import { ButtonWrapper, Container, TextForgotPassword } from "./styles";

export default function PasswordTab() {

  const token = Cookies.get('token')

  const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
    try {
      form.preventDefault();
      const formData = new FormData(form.currentTarget);
      const currentPassword = formData.get("currentPassword");
      const newPassword = formData.get("newPassword");
      const confirmNewPassword = formData.get("confirmNewPassword");
      await changePassword({
        path: "change-password",
        body: {
          currentPassword,
          newPassword,
          confirmNewPassword,
        },
      });
      notify("berhasil mengubah password", "success");
      return Router.reload();
    } catch (err: any) {
      notify(err.message, "error");
    }
  };

  const handleForgotPassword = async () => {
    const parseToken = parseJwt(token as string)
    console.log(parseToken)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container flexDirection="column" gap={30}>
          <Grid container flexDirection="column" gap={7}>
            <LabeledInput name="currentPassword" title="Password saat ini" />
            <TextForgotPassword onClick={handleForgotPassword} >
              Lupa password?
            </TextForgotPassword>
          </Grid>

          <LabeledInput name="newPassword" title="Password baru" />
          <LabeledInput
            name="confirmNewPassword"
            title="Konfirmasi password baru"
          />
          <ButtonWrapper>
            <StyledButton
              style={{ fontWeight: fontWeights.bold, padding: "5px " }}
            >
              Ubah Password
            </StyledButton>
          </ButtonWrapper>
        </Grid>
      </form>
    </Container>
  );
}
