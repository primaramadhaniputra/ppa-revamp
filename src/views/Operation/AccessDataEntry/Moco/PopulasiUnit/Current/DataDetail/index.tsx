import { Grid, Text } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { colors } from "utils/styles";

interface IProps {
	isShowUnit: boolean;
	setIsShowUnit: React.Dispatch<React.SetStateAction<boolean>>;
	formUnitPosition: number;
}

export default function DataDetail({ isShowUnit, setIsShowUnit, formUnitPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowUnit}
				setIsShowDetail={setIsShowUnit}
				formPosition={formUnitPosition}
				title="Form Schedule Post Test"
				button={true}
			>
				<Grid container gap={30} flexDirection="column" style={{ marginBottom: "20px" }}>
					<UltimateInput isLabel={true} isInputSelect={true} title="Brand" />
					<UltimateInput isLabel={true} title="Code Number" isInput={true} type="number" />
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} title="Serial Number" isInput={true} type="number" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Owner" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Category" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Model" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInput={true} title="Engine Type" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInput={true} title="Engine SN" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Activity" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Primary Act" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInput={true} title="Cost Center" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="SMU" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isDate={true} title="Year Product" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isDate={true} title="Warranty End" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isDate={true} title="Delivery Date" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isDate={true} title="Start Opr. Date" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Category BAPA" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Minimum Charge" />
						</Grid>
					</Grid>
					<Grid container gap={30}>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="SAP Population" />
						</Grid>
						<Grid>
							<UltimateInput isLabel={true} isInputSelect={true} title="Area Operation" />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					style={{ margin: "30px 0", boxShadow: "0 1px 3px rgba(0,0,0,.25)", padding: "15px 10px" }}
				>
					<Text variant="h3" style={{ color: colors.blue, fontSize: "clamp(1rem, 2.5vw, 2rem)" }}>
						Standard Operational Activity
					</Text>
				</Grid>
				<Grid container gap={30}>
					<Grid>
						<UltimateInput isLabel={true} isInputSelect={true} title="Additional Act." />
					</Grid>
					<Grid>
						<UltimateInput isLabel={true} isInputSelect={true} title="Sub. Activity" />
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
