import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import Banner from "views/Home/Banner";

export default function Home() {
  return (
    <Layout title="Dashboard">
      <Banner />
    </Layout>
  );
}
