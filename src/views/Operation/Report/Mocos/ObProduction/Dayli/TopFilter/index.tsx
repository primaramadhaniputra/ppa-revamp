import { Grid } from "@hudoro/neron";
import StyledDropdownMenu from "molecules/StyledDropdownMenu";
import React, { useState } from "react";
import TopFilter from "src/components/organism/TopFilter";

interface IProps {
	setDataTable: any;
}

export default function TopFilterer({ setDataTable }: IProps) {
	const [activeShiftDropdown, setActiveShiftDropdown] = useState([]);
	const [activePitDropdown, setActivePitDropdown] = useState([]);

	console.log(setDataTable);

	// const getData = async () => {
	// 	try {
	// 		const startDate = convert(new Date());
	// 		const fromDate = convert(new Date());
	// 		const data = await getDayliMoco({
	// 			params: {
	// 				start: startDate,
	// 				end: fromDate,
	// 			},
	// 		});
	// 		setDataTable(data.data.data.rows);
	// 		return notify("Berhasil mendapatkan data", "success");
	// 	} catch (error: any) {
	// 		return notify(error.message, "error");
	// 	}
	// };

	// const showData = () => {
	// 	getData();
	// };

	return (
		<TopFilter>
			<Grid>
				<StyledDropdownMenu
					title="Shift"
					data={[1, 2]}
					activeDropdown={activeShiftDropdown}
					setActiveDropdown={setActiveShiftDropdown}
				/>
			</Grid>
			<Grid>
				<StyledDropdownMenu
					title="Pit"
					data={[
						"BLP",
						"SENTUK 40",
						"60",
						"SENTUK J",
						"0",
						"SENTUK J SOUTH",
						"SENTUK 10.0",
						"SENTUK -10.0",
						"SENTUK -15.0",
						"SETNUK -30.0",
						"SENTUK -3.0",
						"SENTUK 0.0",
						"DSP JLN HAULING",
						"#N",
					]}
					activeDropdown={activePitDropdown}
					setActiveDropdown={setActivePitDropdown}
				/>
			</Grid>
			{/* <Grid container style={{ flex: 1, minWidth: "150px" }}>
				<StyledButton
					style={{
						fontSize: "25px",
						padding: "0",
						fontWeight: fontWeights.bold,
						backgroundColor: colors.orange,
					}}
					onClick={showData}
				>
					SHOW
				</StyledButton>
			</Grid> */}
		</TopFilter>
	);
}
