import { Grid } from "@hudoro/neron";
import React from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../../styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import { dataTable } from "./dataTable";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Model"]: "-",
		["Code Unit"]: "-",
		["Owner"]: "-",
		["Delivery Date"]: "-",
		["MOHH"]: "-",
		["Start"]: "-",
		["Stop"]: "-",
		["TOH"]: "-",
		["MNG"]: "-",
		["PLT"]: "-",
		["TRV"]: "-",
		["ID"]: "-",
		["DL"]: "-",
		["Wait Eqp"]: "-",
		["No Opt"]: "-",
		["SCH"]: "-",
		["UNSCH"]: "-",
		["TYRE"]: "-",
		["ACC"]: "-",
		["Fuel Const"]: "-",
		["Plan"]: "-",
		["With No Opt"]: "-",
	};
});

export default function Material() {
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>BAPA CATEGORY A2B</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Owner"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
				<Grid>
					<StyledDropdownMenu
						title="Model"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={dataTable} />
			</LayoutTable>
		</>
	);
}
