import Tabs from "molecules/Tabs";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AdminTab from "./AdminTab";
import ProfileTab from "./ProfileTab";
import { TabWrapper } from "./styles";

interface IProps {
  isAdmin: boolean;
}

export default function Pengaturan({ isAdmin }: IProps) {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <>
      {isAdmin ? (
        <Layout title="Pengaturan">
          <TabWrapper>
            <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
          </TabWrapper>
          {activeTab === 0 ? <ProfileTab /> : <AdminTab />}
        </Layout>
      ) : (
        <Layout title="Pengaturan">
          <ProfileTab />
        </Layout>
      )}
    </>
  );
}
