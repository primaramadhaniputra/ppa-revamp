import { Grid } from "@hudoro/neron";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { resetPassword } from "services/users";
import Footer from "src/components/organism/Footer";
import { notify } from "utils/functions";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

interface IProps {
  token: string
}

export default function ResetPassword({ token }: IProps) {

  const router = useRouter()

  const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
    try {
      form.preventDefault()
      const formData = new FormData(form.currentTarget)
      const email = formData.get('email')
      const newPassword = formData.get('newPassword')
      const confirmNewPassword = formData.get('confirmNewPassword')
      await resetPassword({
        body: {
          email,
          newPassword,
          confirmNewPassword,
          token
        },
        path: '/reset-password'
      })
      notify('Berhasil merubah password', 'success')
      return router.push('/')
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
