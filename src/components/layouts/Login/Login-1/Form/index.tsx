import { Grid } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React, { FormEvent } from "react";
import { notify } from "utils/functions";

export default function Form() {
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
    <form onSubmit={handleSubmit}>
      <Grid container flexDirection="column" gap={39}>
        <Grid container flexDirection="column" gap={9}>
          <LabeldInput label={true} title="NRP" name="nrp" />
          <LabeldInput label={true} title="Password" name="password" />
        </Grid>
        <StyledButton>Masuk</StyledButton>
      </Grid>
    </form>
  );
}
