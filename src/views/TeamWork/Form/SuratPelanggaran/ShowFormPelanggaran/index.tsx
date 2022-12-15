import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { B } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function ShowFormPelanggaran({
	isShowDetail,
	setIsShowDetail,
	formPosition,
}: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Form Surat Pelanggaran Karyawan"
			button={true}
		>
			<Grid container flexDirection="column" gap={40}>
				<UltimateInput isInput={true} title="Nama" maxLableWidth="80px" />
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="Riwayat" maxLableWidth="80px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Exp" maxLableWidth="80px" />
					</Grid>
				</Grid>
				<UltimateInput isInputSelect={true} title="Level" maxLableWidth="80px" />
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isDate={true} title="Tanggal" maxLableWidth="80px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="🕜" maxLableWidth="80px" type="time" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInputSelect={true} title="Kategori" maxLableWidth="80px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Lokasi" maxLableWidth="80px" />
					</Grid>
				</Grid>
				<UltimateInput isInput={true} title="Uraian " maxLableWidth="80px" />
				<UltimateInput isInputSelect={true} title="Pembuat" maxLableWidth="80px" />
			</Grid>
			<hr style={{ margin: "50px 0" }} />
			<B>
				<u>Mine License Penalty</u> &nbsp; :
			</B>
			<Grid container flexDirection="column" gap={40}>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInputSelect={true} title="Minepermit" maxLableWidth="80px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Riwayat" maxLableWidth="80px" />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid>
						<UltimateInput isInputSelect={true} title="Simper" maxLableWidth="80px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Riwayat" maxLableWidth="80px" />
					</Grid>
				</Grid>
			</Grid>
		</LayoutOverlayData>
	);
}
