import { Grid } from "@hudoro/neron";
import InputTime from "atoms/InputTime";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React, { useState } from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import TopFilter from "src/components/organism/TopFilter";
import dynamic from "next/dynamic";
import TitleText from "atoms/TitleText";

const MapWithNoSSR = dynamic(() => import("./map"), {
	ssr: false,
});

const data = ["ABC", "CBA"];

export default function RoadTracking() {
	const [activeDropdown, setActiveDropdown] = useState([]);

	const handleChange = () => {
	};

	return (
		<>
			<LayoutTable>
				<TitleText>Safety & Enviro Road Tracking</TitleText>
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
				<MapWithNoSSR />
			</LayoutTable>
		</>
	);
}
