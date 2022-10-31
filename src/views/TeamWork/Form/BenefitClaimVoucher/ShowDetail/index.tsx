import { Grid, Select } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { DataContainer, StyledP, Table } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const dummy = [
	{
		id: "0",
		label: "testing",
		values: "testing",
	},
	{
		id: "1",
		label: "testing",
		values: "testing",
	},
];

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="KT08/HCG/2102/CUTI/00072"
		>
			<Grid flexDirection="row" container gap={60} style={{ padding: "20px 10px" }}>
				<Grid flexDirection="column" container gap={20} style={{ flex: 1, minWidth: "250px" }}>
					<DataContainer>
						<StyledP>NRP</StyledP>
						<Select placeholder="Nrp" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Claim</StyledP>
						<Select placeholder="Claim" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Hub</StyledP>
						<Select placeholder="Hub" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Pasien</StyledP>
						<Select placeholder="Hub" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>File</StyledP>
						<Select placeholder="Hub" items={dummy} />
					</DataContainer>
				</Grid>
				<Grid flexDirection="column" container gap={20} style={{ flex: 1, minWidth: "250px" }}>
					<DataContainer>
						<StyledP>Dept</StyledP>
						<Select placeholder="Nrp" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Date</StyledP>
						<Select placeholder="Claim" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Rp</StyledP>
						<Select placeholder="Hub" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Saldo Plafom</StyledP>
						<Select placeholder="Hub" items={dummy} />
					</DataContainer>
					<DataContainer>
						<StyledP>Vendor</StyledP>
						<Select placeholder="Hub" items={dummy} />
					</DataContainer>
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
