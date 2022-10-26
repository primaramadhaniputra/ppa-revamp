import { Grid, Icon, Text } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import DoughnutCart from "./DoughnutCart";
import LineChart from "./LineChart";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			>
				<Grid container alignItems="center" justifyContent="space-between">
					<Text variant="h3">Activity Chart</Text>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={handleCloseShowDetail} />
				</Grid>
				<LineChart />
				<Grid container justifyContent="space-evenly">
					<div>
						<DoughnutCart />
					</div>
					<div>
						<DoughnutCart />
					</div>
					<div>
						<DoughnutCart />
					</div>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
