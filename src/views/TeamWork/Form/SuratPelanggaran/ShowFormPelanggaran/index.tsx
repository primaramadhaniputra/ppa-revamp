import { Grid } from "@hudoro/neron";
import InputTime from "atoms/InputTime";
import RevisiInput from "atoms/RevisiInput";
import RevisiInputYoutube from "atoms/RevisiInputYoutube";
import StyledSelectInput from "atoms/StyledSelectInput";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { B, StyledLabel } from "./styles";

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
	const [date, setDate] = useState(new Date());

	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Form Surat Pelanggaran Karyawan"
		>
			<Grid container flexDirection="column" gap={40}>
				<StyledSelectInput title="Nama" />
				<Grid container alignItems="center" gap={50}>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Riwayat</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Exp</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
				<StyledSelectInput title="Level" />
				<Grid container alignItems="center" gap={50}>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Tanggal</StyledLabel>
						<Grid>
							<RevisiDate dateState={date} setDateState={setDate} placeholder="..." />
						</Grid>
					</Grid>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<Grid>
							<InputTime name="time" type="time" label="Jam" />
						</Grid>
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid style={{ minWidth: "250px" }}>
						<StyledSelectInput title="Kategori" />
					</Grid>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Lokasi</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
				<Grid>
					<StyledLabel>Uraian Singkat</StyledLabel>
					<Grid>
						<RevisiInputYoutube />
					</Grid>
				</Grid>
				<StyledSelectInput title="Pembuat" />
			</Grid>
			<hr style={{ margin: "50px 0" }} />
			<B>
				<u>Mine License Penalty</u> &nbsp; :
			</B>
			<Grid container flexDirection="column" gap={40}>
				<Grid container alignItems="center" gap={50}>
					<Grid style={{ minWidth: "250px" }}>
						<StyledSelectInput title="Minepermit" />
					</Grid>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Riwayat</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid style={{ minWidth: "250px" }}>
						<StyledSelectInput title="Simper" />
					</Grid>
					<Grid container alignItems="center" style={{ flex: 1, minWidth: "250px" }}>
						<StyledLabel>Riwayat</StyledLabel>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</LayoutOverlayData>
	);
}
