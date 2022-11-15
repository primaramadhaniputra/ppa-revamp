import { Grid } from "@hudoro/neron";
import { IcCalendar } from "atoms/Icon";
import RevisiInput from "atoms/RevisiInput";
import StyledSelectInput from "atoms/StyledSelectInput";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { DataContainer, StyledP, Table } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const [date, setDate] = useState(new Date());

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
						<StyledSelectInput title="NRP" />
					</Grid>
					<Grid>
						<StyledSelectInput title="Dept" />
					</Grid>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<StyledSelectInput title="Claim" />
					</Grid>
					<DataContainer style={{ flex: 1 }}>
						<StyledP>
							<IcCalendar width={16} />
						</StyledP>
						<RevisiDate placeholder="..." dateState={date} setDateState={setDate} />
					</DataContainer>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<Grid>
						<StyledSelectInput title="Hub" />
					</Grid>
					<DataContainer style={{ flex: 1 }}>
						<StyledP>Rp</StyledP>
						<RevisiInput type="number" min={0} />
					</DataContainer>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<DataContainer style={{ flex: 1 }}>
						<StyledP>Pasien</StyledP>
						<RevisiInput />
					</DataContainer>
					<DataContainer style={{ flex: 1 }}>
						<StyledP>Saldo Plafom</StyledP>
						<RevisiInput type="number" min={0} />
					</DataContainer>
				</Grid>
				<Grid container justifyContent="space-between" gap={50}>
					<DataContainer style={{ flex: 1 }}>
						<StyledP>File</StyledP>
						<RevisiInput type="file" />
					</DataContainer>
					<Grid>
						<StyledSelectInput title="Vendor" />
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
