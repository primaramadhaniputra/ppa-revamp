import { Grid } from "@hudoro/neron";
import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SearchingForm from "src/components/organism/SearchingForm";
import { dummyInputDropdown } from "utils/dummy";

export default function GA() {
  return (
    <Layout title="Administration / GA">
      <Grid style={{ maxWidth: "300px" }}>
        <SearchingForm
          title="Menu"
          placeholder="Device / Production / Payload"
          isDate={true}
          isMenu={true}
          isShift={false}
          dropDownData={dummyInputDropdown}
        />
      </Grid>
    </Layout>
  );
}
