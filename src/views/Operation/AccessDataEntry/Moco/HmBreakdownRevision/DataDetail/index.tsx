import { Grid } from "@hudoro/neron";
import RevisiInputYoutube from "atoms/RevisiInputYoutube";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

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
				title="Form Create Post Test"
			>
				<Grid container flexDirection="column" gap={30} style={{ marginBottom: "20px" }}>
					<RevisiInputYoutube />
					<RevisiInputYoutube />
					<RevisiInputYoutube />
					<RevisiInputYoutube />
				</Grid>
				<StyledButton>Update</StyledButton>
			</LayoutOverlayData>
		</>
	);
}
