import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { DataContainer, P, StyledP, Table } from "./styles";

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
			title="KT08/HCG/2102/CUTI/00072"
		>
			<Grid container gap={20} flexDirection="column" style={{ padding: "10px" }}>
				<DataContainer>
					<StyledP>NRP / Nama </StyledP>
					<P>: AGUS EKA PRASETYA</P>
				</DataContainer>
				<DataContainer>
					<StyledP>Perusahaan </StyledP>
					<P>: AMM</P>
				</DataContainer>
				<DataContainer>
					<StyledP>Dept / Posisi </StyledP>
					<P>: FLO / FUELMAN</P>
				</DataContainer>
				<DataContainer>
					<StyledP>Sanksi Pelanggaran </StyledP>
					<P>: Teguran</P>
				</DataContainer>
				<DataContainer>
					<StyledP>Jenis Pelanggaran </StyledP>
					<P>: Hasil Kerja</P>
				</DataContainer>
				<DataContainer>
					<StyledP>Lokasi Kejadian </StyledP>
					<P>: Fuel Sentuk</P>
				</DataContainer>
				<DataContainer>
					<StyledP>Uraian </StyledP>
					<P>
						: Keliru hasil pengisian di input pada FT lain (Pengisian menggunakan FT52609 di input
						di FT52610)
					</P>
				</DataContainer>
				<StyledP style={{ textDecoration: "underline" }}>Mine license penalty </StyledP>
				<DataContainer>
					<StyledP>- Minerpermit </StyledP>
					<P>: </P>
				</DataContainer>
				<DataContainer>
					<StyledP>- Simper </StyledP>
					<P>: </P>
				</DataContainer>
				<StyledP style={{ textDecoration: "underline" }}>Grounded </StyledP>
				<DataContainer>
					<StyledP>- Masa Grounded </StyledP>
					<P>: </P>
				</DataContainer>
				<DataContainer>
					<StyledP>- Jadwal Grounded </StyledP>
					<P>: </P>
				</DataContainer>
				<DataContainer>
					<StyledP>- Jadwal Dirumahkan </StyledP>
					<P>: </P>
				</DataContainer>
				<DataContainer>
					<StyledP>Dibuat oleh </StyledP>
					<P>: </P>
				</DataContainer>
				<DataContainer>
					<StyledP>Pada tanggal </StyledP>
					<P>: </P>
				</DataContainer>
				<DataContainer style={{ flexDirection: "column", width: "100%" }}>
					<StyledP style={{ marginBottom: "15px" }}>Riwayat pelanggaran :</StyledP>
					<Table>
						<thead>
							<tr>
								<th>No</th>
								<th>Date</th>
								<th>Sanksi</th>
								<th>Jenis</th>
								<th>Status</th>
							</tr>
						</thead>
						{/* <tbody>
                        <tr>
                           <td>cell1_1</td><td>cell2_1</td><td>cell3_1</td><td>cell4_1</td><td>cell5_1</td><td>cell6_1</td><td>cell7_1</td>
                        </tr>
                     </tbody> */}
					</Table>
				</DataContainer>
			</Grid>
		</LayoutOverlayData>
	);
}
