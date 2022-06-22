import { fontFamilies, Grid, Radio } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React, { FormEvent } from "react";
import { notify } from "utils/functions";

export default function FormInput() {
  const handleSubmit = async (form: FormEvent<HTMLFormElement>) => {
    try {
      form.preventDefault();
      const formData = new FormData(form.currentTarget);
      const nrp = formData.get("nrp");
      // const password = formData.get('password')
      return notify(nrp as string, "success");
    } catch (error: any) {
      return notify(error.message, "error");
    }
  };
  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Grid container flexDirection="column" gap={50}>
        <Grid container flexDirection="column" gap={20}>
          <LabeldInput color="blue" name="nrp" label={true} title="NRP" />
          <LabeldInput
            color="blue"
            name="password"
            label={true}
            title="Password"
          />
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            style={{
              fontSize: "13px",
              fontFamily: fontFamilies.poppins,
              color: "blue",
            }}
          >
            <Radio label="Remember me" checked={true} />
            <p>Forgot password ?</p>
          </Grid>
        </Grid>
        <StyledButton>Masuk</StyledButton>
      </Grid>
    </form>
  );
}
