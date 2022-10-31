import { Text } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { fontSizing, fontWeights } from "utils/styles";
import { Table, U, UWrapper } from "./styles";

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
			title="SURAT IZIN KARYAWAN
			"
		>
			<Text
				variant="h4"
				style={{
					marginBottom: "20px",
					fontWeight: fontWeights.bold,
					fontSize: fontSizing.xs.fontSize,
				}}
			>
				No. KT08/HCG/2210/IZIN/00058
			</Text>
			<Table width="100%" style={{ fontSize: "10pt" }}>
				<tbody>
					<tr>
						<td style={{ padding: "5px 5px", width: "14%" }}>NRP</td>
						<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
						<td style={{ padding: "5px 5px", width: "35%" }}>19020537</td>
					</tr>
					<tr>
						<td style={{ padding: "5px 5px" }}>Nama</td>
						<td style={{ padding: "5px 5px" }}>:</td>
						<td style={{ padding: "5px 5px" }}>MONA RICHA OCTABERY</td>
					</tr>
					<tr>
						<td style={{ padding: "5px 5px" }}>Jabatan</td>
						<td style={{ padding: "5px 5px" }}>:</td>
						<td style={{ padding: "5px 5px" }}>ACT. GROUP LEADER MOCO</td>
					</tr>
					<tr>
						<td style={{ padding: "5px 5px" }}>Departemen</td>
						<td style={{ padding: "5px 5px" }}>:</td>
						<td style={{ padding: "5px 5px" }}>ENG</td>
					</tr>
				</tbody>
			</Table>
			<UWrapper>
				<U>Alasan Meninggalkan Job Site</U>
				<Table width="100%" style={{ fontSize: "10pt" }}>
					<tbody>
						<tr>
							<td style={{ padding: "5px 5px", width: "14%" }}>
								Meminta ijin karena nyeri demam haid, hanya ijin tanggal 31 saja. Pengajuan 2 hari
								karena tidak bisa kirim data jika hanya 1 hari
							</td>
						</tr>
					</tbody>
				</Table>
			</UWrapper>
			<UWrapper style={{ margin: "0" }}>
				<U>Hendak Mengajukan Izin</U>
				<Table width="100%" style={{ fontSize: "10pt" }}>
					<tbody>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Jenis Izin</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}>Istirahat Haid</td>
						</tr>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Jumlah Hari Izin</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}>1 Hari</td>
						</tr>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Berangkat dari Job Site</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}>2022-10-31</td>
						</tr>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Kembali ke Job Site</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}>2022-11-01</td>
						</tr>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Status</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}>Waiting</td>
						</tr>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Approval</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}></td>
						</tr>
						<tr>
							<td style={{ padding: "5px 5px", width: "30%" }}>Tanggal Approval</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}></td>
						</tr>
					</tbody>
				</Table>
			</UWrapper>
		</LayoutOverlayData>
	);
}
