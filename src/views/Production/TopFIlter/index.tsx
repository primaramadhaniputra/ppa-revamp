import { Grid, Text, Toggler } from "@hudoro/neron";
// import DateWithRange from "molecules/DateWithRange";
import React from "react";
import FilteredDateWithCustomDay from "src/components/organism/FilterDateWithCustomDay";
import { IDate } from "utils/interfaces";
// import { colors } from "utils/styles";
import { WrapperDate } from "../styles";

// const tabs = ["MTD", "YTD", "WTD"];

interface IProps {
	activeTabs: string;
	setActiveTabs: React.Dispatch<React.SetStateAction<string>>;
	date: IDate[];
	setDate: React.Dispatch<React.SetStateAction<IDate[]>>;
	handleChangeActiveType: () => void;
}

export default function TopFilter({
	// activeTabs,
	// setActiveTabs,
	date,
	setDate,
	handleChangeActiveType,
}: IProps) {
	// const handleChangePeriode = (name: string) => {
	// 	setActiveTabs(name);
	// 	if (name === "MTD") {
	// 		const date = new Date();
	// 		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	// 		setDate([
	// 			{
	// 				startDate: firstDay,
	// 				endDate: new Date(),
	// 				key: "selection",
	// 			},
	// 		]);
	// 	} else if (name === "YTD") {
	// 		const date = new Date();
	// 		date.setMonth(0);
	// 		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	// 		setDate([
	// 			{
	// 				startDate: firstDay,
	// 				endDate: new Date(),
	// 				key: "selection",
	// 			},
	// 		]);
	// 	} else {
	// 		const date = new Date();
	// 		date.setDate(date.getDate() - 7);
	// 		setDate([
	// 			{
	// 				startDate: date,
	// 				endDate: new Date(),
	// 				key: "selection",
	// 			},
	// 		]);
	// 	}
	// };

	return (
		<WrapperDate>
			<Grid
				container
				gap={5}
				alignItems="flex-end"
				style={{ height: "29px", flex: 1 }}
				justifyContent="flex-end"
			>
				<Text variant="h4" style={{ fontSize: "14px" }}>
					TC
				</Text>
				<Toggler onChange={handleChangeActiveType} />
				<Text variant="h4" style={{ fontSize: "14px" }}>
					JS
				</Text>
			</Grid>
			<Grid style={{ maxWidth: "230px", margin: "10px 0 0 auto" }}>
				<FilteredDateWithCustomDay
					dateState={date}
					setDateState={setDate}
					placeholder="Choose Date"
				/>
			</Grid>
			{/* <TabsContainer>
				{tabs.map((item, index) => (
					<TabsText
						key={index}
						style={{
							backgroundColor: activeTabs === item ? colors.primary : "#A8A9AA",
						}}
						onClick={() => handleChangePeriode(item)}
					>
						{item}
					</TabsText>
				))}
			</TabsContainer> */}
			{/* <Grid container>
				<DateWithRange
					dateState={date}
					setDateState={setDate}
					title="Date"
					styles={{ backgroundColor: "transparent" }}
				/>
			</Grid> */}
		</WrapperDate>
	);
}
