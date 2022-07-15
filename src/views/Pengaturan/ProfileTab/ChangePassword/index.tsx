import { Grid } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import Router from "next/router";
import React, { FormEvent } from "react";
import { changePassword } from "services/users";
import { notify } from "utils/functions";
import { colors } from "utils/styles";
import { ButtonWrapper } from "../styles";

export default function ChangePassword() {
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
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        flexDirection="column"
        gap={30}
        style={{ marginBottom: "150px" }}
      >
        <LabeledInput
          name="currentPassword"
          title="Password saat ini"
          style={{ backgroundColor: colors.blueSky }}
        />
        <LabeledInput
          name="newPassword"
          title="Password baru"
          style={{ backgroundColor: colors.blueSky }}
        />
        <LabeledInput
          name="confirmNewPassword"
          title="Konfirmasi password baru"
          style={{ backgroundColor: colors.blueSky }}
        />
        <ButtonWrapper>
          <StyledButton>Ubah Password</StyledButton>
        </ButtonWrapper>
      </Grid>
    </form>
  );
}
