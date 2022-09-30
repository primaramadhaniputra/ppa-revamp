import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
import { colors } from "utils/styles";
import CCR from "./ccr";
import { TabsText, Wrapper } from "./styles";

const tabs = ["CCR", "VHMS"];

export default function Hourly() {
	const [activeTabs, setActiveTabs] = useState(0);

	const handleActiveTabs = (index: number) => {
		setActiveTabs(index);
	};
	return (
		<Wrapper>
			<Grid container style={{ margin: "20px 0" }}>
				{tabs.map((item, index) => (
					<TabsText
						key={index}
						style={{
							borderBottom: activeTabs === index ? `2px solid ${colors.orange}` : "",
						}}
						onClick={() => handleActiveTabs(index)}
					>
						{item}
					</TabsText>
				))}
			</Grid>
			{activeTabs === 0 && <CCR />}
		</Wrapper>
	);
}
