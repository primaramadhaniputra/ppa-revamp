import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
interface IProps {
	isShowUpdatePkwt: boolean;
	setIsShowUpdatePkwt: React.Dispatch<React.SetStateAction<boolean>>;
	formUpdatePkwtPosition: number;
}

export default function UpdatePkwt({
	isShowUpdatePkwt,
	setIsShowUpdatePkwt,
	formUpdatePkwtPosition,
}: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowUpdatePkwt}
				setIsShowDetail={setIsShowUpdatePkwt}
				formPosition={formUpdatePkwtPosition}
				title="Form Input Masa PKWT Karyawan"
				button
			>
				<Grid container flexDirection="column" gap={25}>
					<UltimateInput isInput={true} title={"Nama"} />
					<Grid container gap={25}>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Dept"} />
						</Grid>
						<Grid>
							<UltimateInput isInputSelect={true} title={"Posisi"} />
						</Grid>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
