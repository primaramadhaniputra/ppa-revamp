import { Grid } from "@hudoro/neron";
import InputTime from "atoms/InputTime";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React, { ChangeEvent, useState } from "react";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTitle } from "../styles";

const data = ["ABC", "CBA"];

export default function RoadTracking() {
	const [activeDropdown, setActiveDropdown] = useState([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log("eeeeeeeeeeee", e.target.value);
	};

	return (
		<>
			<WrapperTitle>
				<TitleText>Safety & Enviro Road Tracking</TitleText>
			</WrapperTitle>
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
		</>
	);
}
