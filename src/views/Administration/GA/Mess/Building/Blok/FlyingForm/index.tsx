import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Add"
			button={true}
		>
			<Grid container flexDirection="column" gap={30}>
				<UltimateInput isInput={true} title="Nama Mess" />
				<UltimateInput isInput={true} title="Jml. Kamar" />
				<UltimateInput isInput={true} title="Total Kapasitas" />
			</Grid>
		</LayoutOverlayData>
	);
}
