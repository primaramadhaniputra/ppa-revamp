import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import Abs_Machine from "./Abs_Machine";
import App_Verions_Control from "./App_Version_Control";
import Database from "./Database";
import Survey from "./Survey";
import VHMS_Download from "./VHMS_Download";

interface IProps {
  pageTitle: string;
  type: string;
}

const renderContent = (type: string) => {
  if (type === "vhms_download") {
    return <VHMS_Download />
  } else if (type === "database") {
    return <Database />
  } else if (type === 'survey') {
    return <Survey />
  } else if (type === 'app_version_control') {
    return <App_Verions_Control />
  } else if (type === 'user_feedback') {
    return <App_Verions_Control />
  } else if (type === 'abs_machine') {
    return <Abs_Machine />
  }

}

export default function Sytem({ pageTitle, type }: IProps) {
  return (
    <Layout title={pageTitle}>
      {renderContent(type)}
    </Layout>
  );
}
