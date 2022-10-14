import { Grid } from "@hudoro/neron";
import React, { useState } from "react";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import TopFilter from "../TopFilter";
import ChartComponent from "./Chart";
import Detail from "./Detail";
import { TabsContainer, StyledText, DepartmentText } from "./styles";

const tabs = ["Chart", "Detail"];

export default function Department() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<Grid
				container
				alignItems="center"
				justifyContent="space-between"
				style={{ margin: "10px 0 30px", gap: "10px" }}
			>
				<DepartmentText>Department Attendance Ratio</DepartmentText>
				<TabsContainer>
					{tabs.map((item, index) => (
						<StyledText
							key={index}
							className={index === activeTab ? "active" : ""}
							onClick={() => setActiveTab(index)}
						>
							{item}
						</StyledText>
					))}
				</TabsContainer>
			</Grid>
			<FilterLayouts>
				<TopFilter noDept={true} />
			</FilterLayouts>
			{activeTab === 0 ? <ChartComponent /> : <Detail />}
		</>
	);
}
