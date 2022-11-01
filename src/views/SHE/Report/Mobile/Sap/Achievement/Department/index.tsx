import React, { useState } from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText } from "../../../styles";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import DateText from "atoms/DateText";
import { BarChart } from "./BarChart";
import LayoutTable from "src/components/layouts/LayoutTable";

const dummyData = ["GL", "SH", "DH", "SM"];

export default function Department() {
	const [activeDropdown, setActiveDropdown] = useState([]);

	return (
		<>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Achievement SAP All(MHU)</TitleText>
					<DateText />
				</Grid>
			</LayoutTable>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="SAP" />
				</Grid>
				<Grid style={{ minWidth: "200px" }}>
					<StyledDropdownMenu
						title="Level"
						activeDropdown={activeDropdown}
						setActiveDropdown={setActiveDropdown}
						data={dummyData}
					/>
				</Grid>
			</TopFilter>
			<LayoutTable>
				<BarChart />
			</LayoutTable>
		</>
	);
}
