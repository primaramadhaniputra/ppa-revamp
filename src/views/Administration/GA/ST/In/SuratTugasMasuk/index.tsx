import { fontFamilies, Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function SuratTugasMasuk({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="SURAT TUGAS MASUK"
		>
			<Grid>
				<table width="100%" style={{ fontFamily: fontFamilies.poppins, fontSize: 14 }}>
					<tbody>
						<tr>
							<td style={{ width: "14%", padding: "10px 10px" }}>No. Dokumen</td>
							<td style={{ width: "1%" }}>:</td>
							<td style={{ width: "85%", padding: "10px 10px" }}>
								<span id="d_no_doc">KT08/HCG/2211/STIN/00456</span>
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
			<Grid
				style={{
					borderCollapse: "collapse",
					border: "solid 1px black",
					borderRight: "solid 1px white",
					borderLeft: "solid 1px white",
					padding: "15px 0",
					margin: "15px 0",
				}}
			>
				<table width="100%" style={{ fontFamily: fontFamilies.poppins, fontSize: 14 }}>
					<tbody>
						<tr>
							<td style={{ paddingLeft: "10px", width: "14%" }}>NRP</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "35%" }}>
								<span id="d_nrp">409006</span>
							</td>
							<td style={{ padding: "5px 5px", width: "19%" }}>Status Penerimaan / POH</td>
							<td style={{ padding: "5px 5px", width: "1%" }}>:</td>
							<td style={{ padding: "5px 5px", width: "30%" }}>
								<span id="d_poh">SEMARANG</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px" }}>Nama</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td style={{ padding: "5px 5px" }}>
								<span id="d_nama">AZIZ HANAFI</span>
							</td>
							<td style={{ padding: "5px 5px" }}>Departemen</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td style={{ padding: "5px 5px" }}>
								<span id="d_dept">PLT</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px" }}>Jabatan</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td style={{ padding: "5px 5px" }}>
								<span id="d_jabatan">MECHANIC</span>
							</td>
							<td style={{ padding: "5px 5px" }} colSpan={3}></td>
						</tr>
					</tbody>
				</table>
			</Grid>
			<Grid>
				<table width="100%" style={{ fontFamily: fontFamilies.poppins, fontSize: 14 }}>
					<tbody>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Awal Cuti Lalu</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_awal_cuti">2022-11-20</span>
							</td>
							<td rowSpan={2} style={{ width: "50%" }}>
								<table style={{ textAlign: "center", width: "60%" }}>
									<tbody>
										<tr style={{ border: "1px solid rgba(0,0,0,.25)" }}>
											<td colSpan={2} style={{ padding: "5px" }}>
												{" "}
												Total Cuti
											</td>
										</tr>
										<tr>
											<td
												style={{
													width: "calc(60%/2)",
													border: "1px solid rgba(0,0,0,.25)",
													padding: 5,
												}}
											>
												<span id="d_total_cuti">18</span>
											</td>
											<td
												style={{
													width: "calc(60%/2)",
													border: "1px solid rgba(0,0,0,.25)",
													padding: 5,
												}}
											>
												Hari
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Akhir Cuti Lalu</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_akhir_cuti">2022-12-07</span>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Tanggal Induksi</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_induksi">2022-12-08</span>
							</td>
							<td rowSpan={3}></td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Telat Datang Cuti</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_hariTelat">0 Hari</span>
							</td>
						</tr>
						<tr style={{ height: "60px" }}>
							<td style={{ verticalAlign: "top", padding: "10px 0 10px 10px", width: "14%" }}>
								Catatan
							</td>
							<td style={{ verticalAlign: "top", padding: "10px 5px", width: "1%" }}>:</td>
							<td colSpan={2} style={{ verticalAlign: "top", padding: "5px 5px", width: "35%" }}>
								<p id="d_catatan"></p>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Awal Kerja</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_awal_kerja">2022-12-08</span>
							</td>
							<td rowSpan={2}>
								<table style={{ textAlign: "center", width: "60%" }}>
									<tbody>
										<tr style={{ border: "1px solid rgba(0,0,0,.25)" }}>
											<td colSpan={2} style={{ padding: 5 }}>
												Total Hari Kerja
											</td>
										</tr>
										<tr>
											<td
												style={{
													width: "calc(60%/2)",
													border: "1px solid rgba(0,0,0,.25)",
													padding: 5,
												}}
											>
												<span id="d_hari_kerja">70</span>
											</td>
											<td
												style={{
													width: "calc(60%/2)",
													border: "1px solid rgba(0,0,0,.25)",
													padding: 5,
												}}
											>
												Hari
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Akhir Kerja</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_akhir_kerja">2023-02-15</span>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Cuti Berikutnya</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_cuti_next">2023-02-16</span>
							</td>
							<td rowSpan={2}>
								<table style={{ textAlign: "center", width: "60%" }}>
									<tbody>
										<tr style={{ border: "1px solid rgba(0,0,0,.25)" }}>
											<td colSpan={2} style={{ padding: 5 }}>
												Total Cuti
											</td>
										</tr>
										<tr>
											<td
												style={{
													width: "calc(60%/2)",
													border: "1px solid rgba(0,0,0,.25)",
													padding: 5,
												}}
											>
												<span id="d_tot_cuti_berikutnya">14</span>
											</td>
											<td
												style={{
													width: "calc(60%/2)",
													border: "1px solid rgba(0,0,0,.25)",
													padding: 5,
												}}
											>
												Hari
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Selesai Cuti</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_selesai_cuti_next">2023-03-01</span>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Sisa Cuti Tahunan</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_sisa_cuti_tahun">8</span> Hari
							</td>
						</tr>
						<tr>
							<td style={{ padding: "10px 0 10px 10px" }}>Sisa Cuti Besar</td>
							<td style={{ padding: "5px 5px" }}>:</td>
							<td colSpan={2} style={{ padding: "5px 5px" }}>
								<span id="d_sisa_cuti_besar">0</span> Hari
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
			<Grid
				style={{ borderTop: "1px solid rgba(0,0,0,.25)", marginTop: "20px", paddingTop: "20px" }}
			>
				<table style={{ width: "100%", fontFamily: fontFamilies.poppins, fontSize: 14 }}>
					<tbody>
						<tr>
							<td style={{ padding: "0 10px 10px", width: "calc(100%/3)" }}>Dibuat</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px", width: "calc(100%/3)" }}>
								Diketahui
							</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px", width: "calc(100%/3)" }}>
								Disetujui
							</td>
						</tr>
						<tr>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}>
								JAKA KUSHARYANTA, S.HUT.
							</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}>AMIN RIYADI</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}></td>
						</tr>
						<tr>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}>SECTION HEAD</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}>GROUP LEADER</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}></td>
						</tr>
						<tr>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}>2022-11-15 15:22:58</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}>
								Tgl. 2022-11-15 09:56:22
							</td>
							<td style={{ padding: "0 10px 10px", paddingRight: "10px" }}></td>
						</tr>
					</tbody>
				</table>
			</Grid>
		</LayoutOverlayData>
	);
}
