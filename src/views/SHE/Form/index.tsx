import { Grid } from "@hudoro/neron";
import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SearchingForm from "src/components/organism/SearchingForm";

const InputDropdown = [
  {
    id: 0,
    values: "sap_plant",
    label: "Sap plant",
  },
  {
    id: 1,
    values: "insiden",
    label: "Insiden",
  },
  {
    id: 2,
    values: "set_wake_upcall",
    label: "Set wake upcall",
  },
];

export default function Form() {
  return (
    <Layout title="SHE / Form">
      <Grid style={{ maxWidth: "300px" }}>
        <SearchingForm
          title="Menu"
          placeholder="ex: Sap plant"
          isDate={true}
          isMenu={true}
          isShift={false}
          dropDownData={InputDropdown}
        />
      </Grid>
    </Layout>
  );
}
