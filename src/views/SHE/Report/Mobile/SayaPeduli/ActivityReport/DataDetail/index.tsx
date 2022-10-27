import { Grid } from "@hudoro/neron";
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
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Activity Chart"
			>
				<Grid style={{ padding: "10px" }}>
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
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
