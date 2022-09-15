import TitlePage from "atoms/TitlePage";
import Tabs from "molecules/Tabs";
import React, { useState } from "react";
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
			return <ProfileTab />;
		} else if (activeTab === 1) {
			return <PasswordTab />;
		} else {
			return <AdminTab />;
		}
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Pengaturan
			</TitlePage>
			{isAdmin ? (
				<Container>
					<TabWrapper>
						<Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
					</TabWrapper>
					{renderContent()}
				</Container>
			) : (
				<ProfileTab />
			)}
		</>
	);
}
