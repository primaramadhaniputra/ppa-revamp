import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { InputContainer } from "./styles";

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
			<InputContainer>
				<Grid container gap={40}>
					<Grid>
						<UltimateInput
							isInput={true}
							title={"Name"}
							maxLableWidth="90px"
							value="PETRUS PONCO SUNGKOWO"
						/>
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title={"Age"} maxLableWidth="90px" value="29" />
					</Grid>
				</Grid>
				<Grid container gap={40}>
					<Grid>
						<UltimateInput
							isInput={true}
							title={"Ticket For"}
							maxLableWidth="90px"
							value="Employee"
						/>
					</Grid>
					<Grid>
						<UltimateInput
							isInput={true}
							title={"Date"}
							maxLableWidth="90px"
							value={"2022-12-15"}
						/>
					</Grid>
				</Grid>
				<Grid container gap={40}>
					<Grid>
						<UltimateInput isInput={true} title={"Origin"} maxLableWidth="90px" value={"BPN"} />
					</Grid>
					<Grid>
						<UltimateInput
							isInput={true}
							title={"Destinations"}
							maxLableWidth="90px"
							value={"CGK"}
						/>
					</Grid>
				</Grid>
				<Grid container gap={40}>
					<Grid>
						<UltimateInput isInput={true} title={"Departure"} maxLableWidth="90px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title={"Arrival"} maxLableWidth="90px" />
					</Grid>
				</Grid>
				<Grid container gap={40}>
					<Grid>
						<UltimateInput isInputSelect={true} title={"Airline"} maxLableWidth="90px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title={"Eticket"} maxLableWidth="90px" type="file" />
					</Grid>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
