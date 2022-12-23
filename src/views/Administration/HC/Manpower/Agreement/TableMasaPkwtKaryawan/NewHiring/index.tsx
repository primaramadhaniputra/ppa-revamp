import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
interface IProps {
	isShowNewHiring: boolean;
	setIsShowNewHiring: React.Dispatch<React.SetStateAction<boolean>>;
	formNewHiringPosition: number;
}

export default function NewHiring({
	isShowNewHiring,
	setIsShowNewHiring,
	formNewHiringPosition,
}: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowNewHiring}
				setIsShowDetail={setIsShowNewHiring}
				formPosition={formNewHiringPosition}
				title="Form Input Masa PKWT Karyawan"
				button
			>
				<Grid container flexDirection="column" gap={25}>
					<UltimateInput isInputSelect={true} title={"Nama"} />
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Dept"} />
						</Grid>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Posisi"} />
						</Grid>
					</Grid>
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isDate={true} title={"Kontrak 1"} />
						</Grid>
						<Grid>
							<UltimateInput isDate={true} title={"s.d."} />
						</Grid>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
