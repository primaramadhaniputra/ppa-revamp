import { Grid } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import LineChart from "./LineChart";
import { WrapperChart } from "./styles";

const DoughnutCart = dynamic(() => import("./DoughnutCart"), {
	suspense: true,
});

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
				<LineChart />
				<WrapperChart>
					<Grid container alignItems="center" justifyContent="center">
						<DoughnutCart />
					</Grid>
					<Grid container alignItems="center" justifyContent="center">
						<DoughnutCart />
					</Grid>
					<Grid container alignItems="center" justifyContent="center">
						<DoughnutCart />
					</Grid>
				</WrapperChart>
			</LayoutOverlayData>
		</>
	);
}
