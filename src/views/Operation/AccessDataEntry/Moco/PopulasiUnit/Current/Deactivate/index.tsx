import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";

interface IProps {
	isShowDeactivate: boolean;
	setIsShowDeactivate: React.Dispatch<React.SetStateAction<boolean>>;
	formDeactivatePosition: number;
}

export default function Deactivate({
	isShowDeactivate,
	setIsShowDeactivate,
	formDeactivatePosition,
}: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDeactivate}
				setIsShowDetail={setIsShowDeactivate}
				formPosition={formDeactivatePosition}
				title="Deactivate Confirmation"
				button={true}
			>
				<Grid container flexDirection="column" gap={30}>
					<UltimateInput isInput={true} title="Code Number Deactive" />
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isInput={true} title="Last Operation" />
						</Grid>
						<Grid>
							<UltimateInput isInput={true} title="HM" type="time" />
						</Grid>
					</Grid>
					<UltimateInput isDate={true} title="Effective Date" />
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
