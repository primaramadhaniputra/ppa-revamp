import { Grid } from "@hudoro/neron";
import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import SearchingForm from "src/components/organism/SearchingForm";

const InputDropdown = [
  {
    id: 0,
    values: "induksi",
    label: "Induksi",
  },
  {
    id: 1,
    values: "izin",
    label: "Izin",
  },
  {
    id: 2,
    values: "turn-over",
    label: "Turn Over",
  },
];

export default function Report() {
  return (
    <Layout title="TeamWork / Report">
      <Grid style={{ maxWidth: "300px" }}>
        <SearchingForm
          title="Menu"
          placeholder="Induksi / Izin / Turn over"
          isDate={true}
          isMenu={true}
          isShift={false}
          dropDownData={InputDropdown}
        />
      </Grid>
    </Layout>
  );
}
