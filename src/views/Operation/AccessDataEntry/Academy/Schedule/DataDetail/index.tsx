import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";

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
				title="Form Schedule Post Test"
			>
				<Grid container gap={20} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput isLabel={true} title="Name Post Test" isInput={true} />
					<UltimateInput isLabel={true} isInputSelect={true} title="Subject Post Test" />
					<UltimateInput isLabel={true} title="Total Question" isInput={true} type="number" />
					<UltimateInput isLabel={true} title="Peserta" isInput={true} />
					<UltimateInput isLabel={true} title="Duration Time" isInput={true} type="number" />
					<UltimateInput
						isLabel={true}
						title="Date & Open"
						isDate={true}
						isInput={true}
						type="time"
					/>
					<UltimateInput
						isLabel={true}
						title="Date & Close"
						isDate={true}
						isInput={true}
						type="time"
					/>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ marginTop: "50px" }}>
					<StyledButton style={{ maxWidth: "150px" }}>Save</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
