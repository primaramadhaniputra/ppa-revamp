import { Grid } from "@hudoro/neron";
import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SearchingForm from "src/components/organism/SearchingForm";

const InputDropdown = [
  {
    id: 0,
    values: "mobile",
    label: "Mobile",
  },
  {
    id: 1,
    values: "device",
    label: "Device",
  },
  {
    id: 2,
    values: "safety_performance",
    label: "Safety performance",
  },
];

export default function Report() {
  return (
    <Layout title="SHE / Report">
      <Grid style={{ maxWidth: "300px" }}>
        <SearchingForm
          title="Menu"
          placeholder="eg : Mobile"
          isDate={true}
          isMenu={true}
          isShift={false}
          dropDownData={InputDropdown}
        />
      </Grid>
    </Layout>
  );
}
