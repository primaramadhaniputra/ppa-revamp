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
			width={700}
		>
			<Grid container gap={40} style={{ padding: "10px" }}>
				<Grid
					container
					gap={20}
					flexDirection="column"
					style={{ maxWidth: "400px", width: "100%" }}
				>
					<DataContainer>
						<StyledP>NRP </StyledP>
						<P>22002502</P>
					</DataContainer>
					<DataContainer>
						<StyledP>Nama </StyledP>
						<P>22002502</P>
					</DataContainer>
					<DataContainer>
						<StyledP>Posisi </StyledP>
						<P>22002502</P>
					</DataContainer>
					<DataContainer>
						<StyledP>Tanggal Induksi </StyledP>
						<P>22002502</P>
					</DataContainer>
				</Grid>
				<DataContainer style={{ flexDirection: "column", width: "100%" }}>
					<StyledP>Alasan Terlambat </StyledP>
					<Table>
						<tbody>
							<tr>
								<td width="40%">Tekanan Darah</td>
								<td width="10%" style={{ textAlign: "center" }}>
									<span id="d_tkn_darah">120/80</span>
								</td>
								<td width="40%">Nadi</td>
								<td width="10%" style={{ textAlign: "center" }}>
									<span id="d_nadi">85</span>
								</td>
							</tr>
							<tr>
								<td>Suhu Tubuh</td>
								<td style={{ textAlign: "center" }}>
									<span id="d_sh_tubuh">36.5</span>
								</td>
								<td>Pernafasan</td>
								<td style={{ textAlign: "center" }}>
									<span id="d_pernafasan">20</span>
								</td>
							</tr>
							<tr>
								<td>Saturasi Oksigen</td>
								<td style={{ textAlign: "center" }}>
									<span id="d_oksigen">99</span>
								</td>
								<td colSpan={2}></td>
							</tr>
						</tbody>
					</Table>
				</DataContainer>
			</Grid>
		</LayoutOverlayData>
	);
}
