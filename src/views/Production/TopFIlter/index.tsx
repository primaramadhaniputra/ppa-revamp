import { Grid, Text, Toggler } from "@hudoro/neron";
import DateWithRange from "molecules/DateWithRange";
import React from "react";
import { IDate } from "utils/interfaces";
import { colors } from "utils/styles";
import { TabsContainer, TabsText, WrapperDate } from "../styles";

const tabs = ["MTD", "YTD", "WTD"];

interface IProps {
	activeTabs: number | undefined;
	setActiveTabs: React.Dispatch<React.SetStateAction<number | undefined>>;
	date: IDate[];
	setDate: React.Dispatch<React.SetStateAction<IDate[]>>;
	handleChangeActiveType: () => void;
}

export default function TopFilter({
	activeTabs,
	setActiveTabs,
	date,
	setDate,
	handleChangeActiveType,
}: IProps) {
	return (
		<WrapperDate>
			<Grid
				container
				gap={5}
				alignItems="flex-end"
				style={{ height: "44px", justifyContent: "end" }}
			>
				<Text variant="h4" style={{ fontSize: "14px" }}>
					TC
				</Text>
				<Toggler onChange={handleChangeActiveType} />
				<Text variant="h4" style={{ fontSize: "14px" }}>
					JS
				</Text>
			</Grid>
			<TabsContainer>
				{tabs.map((item, index) => (
					<TabsText
						key={index}
						style={{
							backgroundColor: activeTabs === index ? colors.primary : "#A8A9AA",
						}}
						onClick={() => setActiveTabs(index)}
					>
						{item}
					</TabsText>
				))}
			</TabsContainer>
			<Grid container>
				<DateWithRange dateState={date} setDateState={setDate} title="Date" />
			</Grid>
		</WrapperDate>
	);
}
