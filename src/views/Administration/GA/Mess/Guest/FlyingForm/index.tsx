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
			title="Update Employee Mess"
			button={true}
		>
			<Grid container flexDirection="column" gap={30}>
				<UltimateInput isInput={true} title="Nama" />
				<UltimateInput isInput={true} title="Departement" />
				<UltimateInput isInput={true} title="Jabatan" />
				<UltimateInput isInput={true} title="Position" />
				<UltimateInput isInputSelect={true} title="Blok" />
				<Grid container gap={20}>
					<Grid>
						<UltimateInput isInputSelect={true} title="Room Type" />
					</Grid>
					<Grid>
						<UltimateInput isInputSelect={true} title="Kamar" />
					</Grid>
				</Grid>
				<Grid container gap={20}>
					<Grid>
						<UltimateInput isInput={true} title="Kapasitas" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Terisi" />
					</Grid>
				</Grid>
				<Grid container gap={20}>
					<Grid>
						<UltimateInput isInput={true} title="Bed Number" />
					</Grid>
					<Grid>
						<UltimateInput isDate={true} title="📅" />
					</Grid>
				</Grid>
			</Grid>
		</LayoutOverlayData>
	);
}
