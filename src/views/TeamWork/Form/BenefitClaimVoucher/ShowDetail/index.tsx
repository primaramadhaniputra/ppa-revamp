import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { DataContainer, Table } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Claim Application"
		>
			<Grid container flexDirection="column" gap={30} style={{ marginBottom: "50px" }}>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<UltimateInput isInputSelect={true} title="NRP" maxLableWidth="70px" />
					</Grid>
					<Grid>
						<UltimateInput isInputSelect={true} title="Dept" maxLableWidth="70px" />
					</Grid>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<UltimateInput isInputSelect={true} title="Claim" maxLableWidth="70px" />
					</Grid>
					<Grid>
						<UltimateInput isDate={true} title="📅" maxLableWidth="70px" />
					</Grid>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<UltimateInput isInputSelect={true} title="Hub" maxLableWidth="70px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Rp" maxLableWidth="70px" type="number" />
					</Grid>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="Pasien" maxLableWidth="70px" />
					</Grid>
					<Grid>
						<UltimateInput isInput={true} title="Saldo Plafom" maxLableWidth="70px" type="number" />
					</Grid>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<UltimateInput isInput={true} title="File" maxLableWidth="70px" type="File" />
					</Grid>
					<Grid>
						<UltimateInput isInputSelect={true} title="Vendor" maxLableWidth="70px" />
					</Grid>
				</Grid>
			</Grid>
			<DataContainer style={{ flexDirection: "column", width: "100%" }}>
				<Table>
					<thead>
						<tr>
							<th>Nama Pasien</th>
							<th>Kode Hub</th>
							<th>Kode Klaim</th>
							<th>Jumlah(Rp)</th>
							<th>Tgl.Kwitansi</th>
							<th>File</th>
							<th>Vendor</th>
							<th>Action</th>
						</tr>
					</thead>
				</Table>
			</DataContainer>
		</LayoutOverlayData>
	);
}
