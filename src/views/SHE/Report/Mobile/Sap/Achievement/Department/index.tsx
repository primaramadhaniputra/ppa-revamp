import React, { useState } from "react";
import { TableWrapper } from "./styles";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTable, WrapperTitle } from "../../../styles";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import DateText from "atoms/DateText";
import { BarChart } from "./BarChart";

const dummyData = ["GL", "SH", "DH", "SM"];

export default function Department() {
	const [activeDropdown, setActiveDropdown] = useState([]);

	return (
		<>
			<WrapperTitle>
				<TitleText>Achievement SAP All(MHU)</TitleText>
				<DateText />
			</WrapperTitle>
			<TableWrapper>
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
				<WrapperTable>
					<BarChart />
				</WrapperTable>
			</TableWrapper>
		</>
	);
}
