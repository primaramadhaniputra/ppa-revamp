import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
interface IProps {
	isShowAddEmployee: boolean;
	setIsShowAddEmployee: React.Dispatch<React.SetStateAction<boolean>>;
	formAddEmployeePosition: number;
}

export default function AddEmployee({
	isShowAddEmployee,
	setIsShowAddEmployee,
	formAddEmployeePosition,
}: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowAddEmployee}
				setIsShowDetail={setIsShowAddEmployee}
				formPosition={formAddEmployeePosition}
				title="New Employee"
			>
				<Grid container flexDirection="column" gap={25}>
					<UltimateInput isInput={true} title={"NRP"} />
					<UltimateInput isInput={true} title={"Nama"} />
					<UltimateInput isInputSelect={true} title={"Gender"} />
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Marital Status"} />
						</Grid>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Number of Child"} />
						</Grid>
					</Grid>
					<UltimateInput isInputSelect={true} title={"Religion"} />
					<UltimateInput isInputSelect={true} title={"Departement"} />
					<UltimateInput isInputSelect={true} title={"Jabatan"} />
					<UltimateInput isInputSelect={true} title={"Position"} />
					<UltimateInput isInput={true} title={"Place of Birth"} />
					<UltimateInput isDate={true} title={"Date of Birth"} />
					<UltimateInput isInputSelect={true} title={"Education"} />
					<UltimateInput isInput={true} title={"Stay"} />
					<UltimateInput isInputSelect={true} title={"POH"} />
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isDate={true} title={"Hiring Date"} />
						</Grid>
						<Grid>
							<UltimateInput isInput={true} title={"Grade"} />
						</Grid>
					</Grid>
					<UltimateInput isInput={true} title={"Email"} />
					<UltimateInput isInput={true} title={"HP"} />
					<UltimateInput isInput={true} title={"HP Emergency"} />
					<UltimateInput isInput={true} title={"No KTP"} />
					<UltimateInput isInput={true} title={"NPWP"} />
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isInput={true} title={"On Site"} />
						</Grid>
						<Grid>
							<UltimateInput isInput={true} title={"Off Site"} />
						</Grid>
					</Grid>
					<UltimateInput isInput={true} title={"Address"} />
					<UltimateInput isInput={true} title={"ID Finger"} />
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
