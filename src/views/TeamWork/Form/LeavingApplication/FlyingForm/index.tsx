import { Checkbox, Grid, Toggler } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { CheckboxContainer, Input, InputContainer, Label } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const dummyTitle = ["Lapangan", "Tahunan", "Seminar", "Besar", "Istirahat"];

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Leave Application"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInput={true} title="Name" maxLableWidth="120px" />
				<UltimateInput isInput={true} title="Marital Status" maxLableWidth="120px" />
				<UltimateInput isInput={true} title="Position" maxLableWidth="120px" />
				<UltimateInput isInput={true} title="Hiring Date" maxLableWidth="120px" />
				<UltimateInput isInput={true} title="Address" maxLableWidth="120px" />
				<UltimateInput isInput={true} title="POH" maxLableWidth="120px" />
				<UltimateInput isInput={true} title="Email" maxLableWidth="120px" />
				<Grid container alignItems="center" gap={20}>
					<Label>Bring Family</Label>
					<Toggler />
					<Grid>
						<UltimateInput isDate={true} />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" gap={30} style={{ margin: "20px 0 0" }}>
					<Grid>
						<UltimateInput isDate={true} title="Start Date" maxLableWidth="120px" />
					</Grid>
					<Grid>
						<UltimateInput isDate={true} title="To Date" maxLableWidth="120px" />
					</Grid>
				</Grid>
				<Grid container gap={40} justifyContent="center">
					{dummyTitle.map((item, index) => (
						<Grid container flexDirection="column" gap={10} key={index}>
							<Grid>
								<Label>{item}</Label>
							</Grid>
							<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
								<CheckboxContainer>
									<Grid
										container
										alignItems="center"
										style={{ padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.3)" }}
									>
										<Checkbox />
									</Grid>
									<Input
										type="number"
										min="0"
										style={{ border: "none", outline: "none", padding: "0 10px", maxWidth: "70px" }}
									/>
								</CheckboxContainer>
							</Grid>
						</Grid>
					))}
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
