import { Grid } from "@hudoro/neron";
import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";

export default function HC() {
  return (
    <Layout>
      <Grid style={{ maxWidth: "300px" }}></Grid>
    </Layout>
  );
}
