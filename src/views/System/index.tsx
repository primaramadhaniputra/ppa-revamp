import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AbsMachine from "./AbsMachine";
import AccessControl from "./AccessControl";
import AppVerionsControl from "./AppVersionControl";
import Database from "./Database";
import DeviceMonitoring from "./DeviceMonitoring";
import Events from "./Events";
import Survey from "./Survey";
import VHMSDownload from "./VHMSDownload";

interface IProps {
  pageTitle: string;
  type: string;
}

const renderContent = (type: string) => {
  if (type === "vhms_download") {
    return <VHMSDownload />;
  } else if (type === "database") {
    return <Database />;
  } else if (type === "survey") {
    return <Survey />;
  } else if (type === "app_version_control") {
    return <AppVerionsControl />;
  } else if (type === "user_feedback") {
    return <AppVerionsControl />;
  } else if (type === "abs_machine") {
    return <AbsMachine />;
  } else if (type === "access_control") {
    return <AccessControl />;
  } else if (type === "events") {
    return <Events />;
  } else {
    return <DeviceMonitoring />;
  }
};

export default function Sytem({ pageTitle, type }: IProps) {
  return <Layout title={`system / ${pageTitle}`}>{renderContent(type)}</Layout>;
}
