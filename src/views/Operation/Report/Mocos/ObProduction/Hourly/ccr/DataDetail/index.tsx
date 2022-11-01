import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import DisplayChart from "../DisplayChart";

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
				title="Hourly Production on August 24, 2022"
			>
				<DisplayChart />
			</LayoutOverlayData>
		</>
	);
}
