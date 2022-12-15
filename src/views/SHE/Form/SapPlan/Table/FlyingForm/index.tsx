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
			title="Update SAP Plan"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInput={true} title="NRP" maxLableWidth="100px" />
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="Bulan" maxLableWidth="100px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Tahun" maxLableWidth="100px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="KTA" maxLableWidth="100px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="TTA" maxLableWidth="100px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="Inspeksi" maxLableWidth="100px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Observasi" maxLableWidth="100px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="P.KRITIS" maxLableWidth="100px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="WAKE UP CALL" maxLableWidth="100px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="S.MEETING" maxLableWidth="100px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="CHOACING" maxLableWidth="100px" />
					</Grid>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
