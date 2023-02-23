import { Grid } from "@hudoro/neron";
import React from "react";
import { Container, PopupNotifications, TabsText } from "../styles";

const tabsText = ["Performance", "Kritik & Saran", "Partisipan"];

interface IProps {
	tabContent: string;
	setTabContent: React.Dispatch<React.SetStateAction<string>>;
	notifications: number;
}

const Tabs = ({ tabContent, setTabContent, notifications }: IProps) => {
	const handleChangeActiveContent = (type: string) => {
		setTabContent(type);
	};

	return (
		<Container>
			{tabsText.map((item, index) => (
				<Grid container key={index} style={{ position: "relative" }}>
					<TabsText
						isActiveContent={tabContent === item}
						onClick={() => handleChangeActiveContent(item)}
					>
						{item}
					</TabsText>
					{index === 1 && notifications > 0 && (
						<PopupNotifications>{notifications}</PopupNotifications>
					)}
				</Grid>
			))}
		</Container>
	);
};

export default Tabs;
