import { Grid, Text } from "@hudoro/neron";
import { IcBarChart, IcCalendar } from "atoms/Icon";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { colors } from "utils/styles";
import LeadTimeTable from "./LeadTimeTable";
import StackedBarChart from "./StackedBarChart";
interface IProps {
	isShowLeadTimePenilaian: boolean;
	setIsShowLeadTimePenilaian: React.Dispatch<React.SetStateAction<boolean>>;
	formLeadTimePenilaianPosition: number;
}

export default function LeadTimePenilaian({
	isShowLeadTimePenilaian,
	setIsShowLeadTimePenilaian,
	formLeadTimePenilaianPosition,
}: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowLeadTimePenilaian}
				setIsShowDetail={setIsShowLeadTimePenilaian}
				formPosition={formLeadTimePenilaianPosition}
				title="LEADTIME ASSESSMENT END CONTRACT"
				width={1400}
			>
				<Grid container flexDirection="column" gap={25}>
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isDate={true} title={"Periode End Contract"} />
						</Grid>
						<Grid>
							<UltimateInput isDate={true} title={"To"} />
						</Grid>
						<Grid container alignItems="flex-end">
							<StyledButton>Search</StyledButton>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					style={{ margin: "50px 0", borderTop: `2px solid ${colors.primary}`, paddingTop: 10 }}
				>
					<Grid container alignItems="flex-end" gap={5}>
						<IcBarChart width={24} />
						<Text variant="h4">Leadtime Penyerahan Kontrak</Text>
					</Grid>
					<Grid style={{ marginTop: "20px" }}>
						<StackedBarChart />
					</Grid>
				</Grid>
				<Grid
					style={{ margin: "30px 0", borderTop: `2px solid ${colors.primary}`, paddingTop: 10 }}
				>
					<Grid container alignItems="flex-end" gap={5}>
						<IcCalendar width={24} />
						<Text variant="h4">Leadtime Assessment by Dept</Text>
					</Grid>
					<Grid style={{ marginTop: "20px" }}>
						<LeadTimeTable />
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
