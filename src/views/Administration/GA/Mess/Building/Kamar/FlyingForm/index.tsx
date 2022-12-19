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
			title="KT09/HCG/2210/TKET/00459"
			button={true}
		>
			<Grid container flexDirection="column" gap={30}>
				<UltimateInput isInput={true} title="Blok" />
				<UltimateInput isInput={true} title="Room Type" />
				<UltimateInput isInput={true} title="No. Kamar" />
			</Grid>
		</LayoutOverlayData>
	);
}
