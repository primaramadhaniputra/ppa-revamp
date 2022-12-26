import { Grid } from "@hudoro/neron";
import React from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../../../../styles";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";

export default function Abfc() {
	const [activeShiftDropDown, setActiveShiftDropDown] = React.useState([]);

	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Activity Base Fuel Costing</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<StyledDropdownMenu
						title="Activity"
						data={[1, 2]}
						activeDropdown={activeShiftDropDown}
						setActiveDropdown={setActiveShiftDropDown}
					/>
				</Grid>
			</TopFilter>
		</>
	);
}
