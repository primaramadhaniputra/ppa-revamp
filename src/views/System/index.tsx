import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import Abs_Machine from "./Abs_Machine";
import AccessControl from "./AccessControl";
import App_Verions_Control from "./App_Version_Control";
import Database from "./Database";
import DeviceMonitoring from "./DeviceMonitoring";
import Events from "./Events";
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
  } else if (type === 'access_control') {
    return <AccessControl />
  } else if (type === 'events') {
    return <Events />
  } else {
    return <DeviceMonitoring />
  }
}

export default function Sytem({ pageTitle, type }: IProps) {
  return (
    <Layout title={`system / ${pageTitle}`}>
      {renderContent(type)}
    </Layout>
  );
}
