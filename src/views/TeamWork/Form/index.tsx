import { Grid } from "@hudoro/neron";
import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SearchingForm from "src/components/organism/SearchingForm";
import { InputDropdownTeamworkForm } from "utils/dummy";

export default function Form() {
  return (
    <Layout title="TeamWork / Form">
      <Grid style={{ maxWidth: "300px" }}>
        <SearchingForm
          title="Menu"
          placeholder="Upload roster"
          isDate={true}
          isMenu={true}
          isShift={false}
          dropDownData={InputDropdownTeamworkForm}
        />
      </Grid>
    </Layout>
  );
}
