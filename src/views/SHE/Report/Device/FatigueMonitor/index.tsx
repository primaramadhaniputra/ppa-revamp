import { Grid, Text } from "@hudoro/neron";
import InputTime from "atoms/InputTime";
import TitleText from "atoms/TitleText";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React, { useState } from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import TopFilter from "src/components/organism/TopFilter";
import { fontSizing } from "utils/styles";
import { LineChart } from "./LineChart";

const data = ["ABC", "CBA"];

export default function RoadTracking() {
	const [activeDropdown, setActiveDropdown] = useState([]);

	const handleChange = () => {
	};

	return (
		<>
			<LayoutTable>
				<TitleText>Fatigue Control</TitleText>
			</LayoutTable>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="CN"
						data={data}
						activeDropdown={activeDropdown}
						setActiveDropdown={setActiveDropdown}
					/>
				</Grid>
				<Grid>
					<InputTime label="Start" name="start" type="time" onChange={handleChange} />
				</Grid>
				<Grid>
					<InputTime label="End" name="end" type="time" onChange={handleChange} />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<Grid style={{ margin: "20px 0" }} container flexDirection="column" gap={20}>
					<Text variant="h4" style={{ fontSize: fontSizing.sm.fontSize }}>
						Time : 2022-10-30 00:00 - 00:00
					</Text>
					<Text variant="h4" style={{ fontSize: fontSizing.xs.fontSize }}>
						DT3611
					</Text>
				</Grid>
				<LineChart />
			</LayoutTable>
		</>
	);
}
