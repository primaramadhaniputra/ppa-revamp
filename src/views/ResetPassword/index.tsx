import { Grid } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React, { FormEvent } from "react";
import { forgotPassword } from "services/users";
import Footer from "src/components/organism/Footer";
import { notify } from "utils/functions";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

export default function ResetPassword() {

  const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
    try {
      form.preventDefault()
      const formData = new FormData(form.currentTarget)
      const email = formData.get('email')
      await forgotPassword({
        body: {
          email
        },
        path: '/forgot-password'
      })
      return notify('Silahkan periksa email anda', 'success')
    } catch (error: any) {
      return notify(error.message, 'error')
    }
  }

  return (
    <Wrapper>
      <LoginWrapper onSubmit={handleSubmit}>
        <StyledCard>
          <Title>Forgot Password</Title>
          <Grid container flexDirection="column" gap={20}>
            <LabeledInput
              title="Email"
              name="email"
            />
            <LabeledInput
              title="Password baru"
              name="newPassword"
            />
            <LabeledInput
              title="Konfirmasi password"
              name="confirmNewPassword"
            />
          </Grid>
          <StyledButton style={{ marginTop: '20px' }}>Submit</StyledButton>
        </StyledCard>
      </LoginWrapper>
      <Footer />
    </Wrapper>
  );
}
