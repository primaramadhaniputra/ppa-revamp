import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AbsMachine from "./AbsMachine";
import AccessControl from "./AccessControl";
import Database from "./Database";
import DeviceMonitoring from "./DeviceMonitoring";
import Events from "./Events";
import Survey from "./Survey";
import VHMSDownload from "./VHMSDownload";
import AppVersionControl from "./AppVersionControl";
import UserFeedback from "./UserFeedback";

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
    return <AppVersionControl />;
  } else if (type === "user_feedback") {
    return <UserFeedback />;
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
