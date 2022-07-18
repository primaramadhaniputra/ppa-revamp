import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import VHMS_Download from "./VHMS_Download";

interface IProps {
  pageTitle: string;
  type?: string;
}

export default function Sytem({ pageTitle, type }: IProps) {
  return (
    <Layout title={pageTitle}>
      {type === "vhms_download" ? <VHMS_Download /> : "banana"}
    </Layout>
  );
}
