import React from "react";
import { FormField, FormGroup, FormLabel } from "./styles";

// interface IProps {
//   placeholder?: string;
// }

export default function RevisiInputYoutube() {
  return (
    <FormGroup>
      <FormField type="input" placeholder="Name" />
      <FormLabel htmlFor="name">Name</FormLabel>
    </FormGroup>
  );
}
