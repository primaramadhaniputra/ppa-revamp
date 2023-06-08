import { Grid } from "@hudoro/neron";
import React from "react";
import { Container, TabsText } from "../styles";

const tabsText = ["Performance", "Kritik & Saran", "Partisipan"];

interface IProps {
	tabContent: string;
	setTabContent: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = ({ tabContent, setTabContent }: IProps) => {
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
				</Grid>
			))}
		</Container>
	);
};

export default Tabs;
