import { fontFamilies, Grid, Radio } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { Title } from "./styles";

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
				title="Add HM"
				button={true}
			>
				<Grid container flexDirection="column" gap={30} style={{ marginBottom: "30px" }}>
					<UltimateInput isInput={true} title="Code Number" maxLableWidth="120px" />
					<UltimateInput isDate={true} title="Date" maxLableWidth="120px" />
					<UltimateInput isInputSelect={true} title="Name" maxLableWidth="120px" />
					<UltimateInput isInput={true} title="Roster Actual" maxLableWidth="120px" />
					<Grid container gap={20} style={{ fontFamily: fontFamilies.poppins, fontSize: "14px" }}>
						<Title>Shift Operation :</Title>
						<Grid container gap={10}>
							<Grid container gap={3}>
								<Radio name="test" />
								<label>Day</label>
							</Grid>
							<Grid container gap={3}>
								<Radio name="test" />
								<label>Night</label>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid style={{ border: "1px dashed black" }} />
				<Grid container flexDirection="column" gap={30} style={{ marginTop: "30px" }}>
					<Grid container gap={60}>
						<Grid container gap={20} flexDirection="column" style={{ flex: 1 }}>
							<Grid>
								<UltimateInput isInputSelect={true} title="Activity" />
							</Grid>
							<Grid container gap={50}>
								<Grid>
									<UltimateInput isInput={true} title="Start" type="time" />
								</Grid>
								<Grid>
									<UltimateInput isInput={true} title="Stop" type="time" />
								</Grid>
							</Grid>
						</Grid>
						<Grid container gap={20} flexDirection="column" style={{ flex: 1 }}>
							<Grid>
								<UltimateInput isInputSelect={true} title="Sub Activity" />
							</Grid>
							<Grid container gap={50}>
								<Grid>
									<UltimateInput isInput={true} title="Start" type="time" />
								</Grid>
								<Grid>
									<UltimateInput isInput={true} title="Stop" type="time" />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
