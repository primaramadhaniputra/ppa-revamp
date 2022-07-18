import Tabs from "molecules/Tabs";
import React, { useState } from "react";
import Layout from "src/components/layouts/Dashboard/layout";
import AdminTab from "./AdminTab";
import PasswordTab from "./PasswordTab";
import ProfileTab from "./ProfileTab";
import { Container, TabWrapper } from "./styles";

interface IProps {
  isAdmin: boolean;
}


export default function Pengaturan({ isAdmin }: IProps) {
  const [activeTab, setactiveTab] = useState(0);

  const renderContent = () => {
    if (activeTab === 0) {
      return <ProfileTab />
    } else if (activeTab === 1) {
      return <PasswordTab />
    } else {
      return <AdminTab />
    }
  }

  return (
    <>
      {isAdmin ? (
        <Layout title="Pengaturan">
          <Container>
            <TabWrapper >
              <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
            </TabWrapper>
            {renderContent()}
          </Container>
        </Layout>
      ) : (
        <Layout title="Pengaturan">
          <ProfileTab />
        </Layout>
      )
      }
    </>
  );
}
