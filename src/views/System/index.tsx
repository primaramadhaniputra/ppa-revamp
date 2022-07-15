import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";

interface IProps {
  pageTitle: string;
}

export default function Sytem({ pageTitle }: IProps) {
  return <Layout title={pageTitle} children={undefined} />;
}
