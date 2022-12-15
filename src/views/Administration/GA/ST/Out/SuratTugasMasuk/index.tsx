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
			title="SURAT TUGAS KELUAR"
		>
			<Grid>
				<table width="100%" style={{ fontFamily: fontFamilies.poppins, fontSize: 13 }}>
					<tbody>
						<tr>
							<td style={{ width: "14%", paddingLeft: "10px" }}>No. Dokumen</td>
							<td style={{ width: "1%" }}>:</td>
							<td style={{ width: "85%", padding: "10px" }}>
								<span id="d_no_doc">KT08/HCG/2212/SOUT/00383</span>
							</td>
						</tr>
						<tr>
							<td style={{ width: "20%", padding: "10px 10px" }}>Diberikan Kepada</td>
							<td>:</td>
							<td style={{ padding: "10px" }}></td>
						</tr>
					</tbody>
				</table>
			</Grid>
			<Grid>
				<table
					width="100%"
					style={{
						borderCollapse: "collapse",
						border: "solid 1px black",
						borderRight: "solid 1px white",
						borderLeft: "solid 1px white",
						fontFamily: fontFamilies.poppins,
						fontSize: 13,
					}}
				>
					<tbody>
						<tr>
							<td style={{ paddingLeft: "10px", width: "14%" }}>NRP</td>
							<td style={{ padding: "7px", width: "1%" }}>:</td>
							<td style={{ padding: "7px", width: "35%" }}>
								<span id="d_nrp">11042201</span>
							</td>
							<td style={{ padding: "7px", width: "19%" }}>Status Penerimaan / POH</td>
							<td style={{ padding: "7px", width: "1%" }}>:</td>
							<td style={{ padding: "7px", width: "30%" }}>
								<span id="d_poh">BALIKPAPAN</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px" }}>Nama</td>
							<td style={{ padding: "7px" }}>:</td>
							<td style={{ padding: "7px" }}>
								<span id="d_nama">YADI SAPUTRA</span>
							</td>
							<td style={{ padding: "7px" }}>Tgl. Awal Kerja</td>
							<td style={{ padding: "7px" }}>:</td>
							<td style={{ padding: "7px" }}>
								<span id="d_awal_kerja">2022-10-01</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "7px" }}>Jabatan</td>
							<td style={{ padding: "7px" }}>:</td>
							<td style={{ padding: "7px" }}>
								<span id="d_jabatan">ADMINISTRASI</span>
							</td>
							<td style={{ padding: "7px" }}>Tgl. Akhir Kerja</td>
							<td style={{ padding: "7px" }}>:</td>
							<td style={{ padding: "7px" }}>
								<span id="d_akhir_kerja">2022-12-11</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "7px" }}>Departemen</td>
							<td style={{ padding: "7px" }}>:</td>
							<td style={{ padding: "7px" }}>
								<span id="d_dept">PAC</span>
							</td>
							<td style={{ padding: "7px" }}>Jumlah Hari Kerja</td>
							<td style={{ padding: "7px" }}>:</td>
							<td style={{ padding: "7px" }}>
								<span id="d_tot_hari_kerja">72</span> Hari
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
			{/*  */}
			<Grid style={{ margin: "20px 0" }}>
				<table style={{ fontFamily: fontFamilies.poppins, fontSize: 13 }}>
					<tbody>
						<tr>
							<td rowSpan={3} style={{ width: "50%", paddingRight: "20px", paddingLeft: "10px" }}>
								<table
									width="80%"
									style={{ padding: "10px", borderCollapse: "collapse", border: "solid 1px black" }}
								>
									<tbody>
										<tr>
											<td
												colSpan={3}
												style={{
													fontWeight: "bold",
													textAlign: "center",
													borderBottom: "solid 1px black",
												}}
											>
												DATA CUTI
											</td>
										</tr>
										<tr>
											<td style={{ width: "40%", padding: "5px" }}>Cuti Lapangan</td>
											<td
												style={{
													width: "1%",
													padding: "5px",
													borderRight: "solid 1px white",
													borderLeft: "solid 1px white",
												}}
											>
												:
											</td>
											<td style={{ width: "59%", padding: "5px" }}>
												<span id="cl">10 Hari</span>
											</td>
										</tr>
										<tr>
											<td style={{ padding: "7px 5px" }}>Cuti Tahunan</td>
											<td
												style={{
													padding: "7px 5px",
													borderRight: "solid 1px white",
													borderLeft: "solid 1px white",
												}}
											>
												:
											</td>
											<td style={{ padding: "7px 5px" }}>
												<span id="ct">0 Hari</span>
											</td>
										</tr>
										<tr>
											<td style={{ padding: "7px 5px" }}>Cuti Seminar</td>
											<td
												style={{
													padding: "7px 5px",
													borderRight: "solid 1px white",
													borderLeft: "solid 1px white",
												}}
											>
												:
											</td>
											<td style={{ padding: "7px 5px" }}>
												<span id="cs">0 Hari</span>
											</td>
										</tr>
										<tr>
											<td style={{ padding: "7px 5px" }}>Cuti Besar</td>
											<td
												style={{
													padding: "7px 5px",
													borderRight: "solid 1px white",
													borderLeft: "solid 1px white",
												}}
											>
												:
											</td>
											<td style={{ padding: "7px 5px" }}>
												<span id="cb">0 Hari</span>
											</td>
										</tr>
										<tr>
											<td style={{ padding: "7px 5px" }}>Cuti Istirahat</td>
											<td
												style={{
													padding: "7px 5px",
													borderRight: "solid 1px white",
													borderLeft: "solid 1px white",
												}}
											>
												:
											</td>
											<td style={{ padding: "7px 5px" }}>
												<span id="ci">0 Hari</span>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td style={{ paddingLeft: "10px", width: "19%" }}>Awal Cuti Aktual</td>
							<td style={{ padding: " 5px", width: "1%" }}>:</td>
							<td colSpan={2} style={{ padding: " 5px", width: "30%" }}>
								<span id="d_awal_cuti">2022-12-12</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px" }}>Akhir Cuti Aktual</td>
							<td style={{ padding: " 5px" }}>:</td>
							<td colSpan={2} style={{ padding: " 5px" }}>
								<span id="d_akhir_cuti">2022-12-21</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px" }}>Total Cuti</td>
							<td style={{ padding: " 5px" }}>:</td>
							<td colSpan={2} style={{ padding: " 5px" }}>
								<span id="d_total_cuti">10</span> Hari
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
			<hr />
			{/*  */}
			<Grid style={{ margin: "20px 0" }}>
				<table style={{ width: "100%", fontFamily: fontFamilies.poppins, fontSize: 13 }}>
					<tbody>
						<tr>
							<td
								style={{ width: "calc(100%/3)", padding: "10px 0 10px 10px", paddingRight: "10px" }}
							>
								Dibuat Oleh,
							</td>
							<td
								style={{ width: "calc(100%/3)", padding: "10px 0 10px 10px", paddingRight: "10px" }}
							>
								Diketahui Oleh,
							</td>
							<td
								style={{ width: "calc(100%/3)", padding: "10px 0 10px 10px", paddingRight: "10px" }}
							>
								Dikonfirmasi Oleh,
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px", padding: "10px 0 10px 10px" }}>
								<span id="d_nama_buat" style={{ fontWeight: "bold", textDecoration: "underline" }}>
									YADI SAPUTRA
								</span>
							</td>
							<td style={{ paddingLeft: "10px", padding: "10px 0 10px 10px" }}>
								<span
									id="d_nama_ketahui"
									style={{ fontWeight: "bold", textDecoration: "underline" }}
								>
									ADITYA DIMAS DANIEL SAPUTRA
								</span>
							</td>
							<td style={{ paddingLeft: "10px", padding: "10px 0 10px 10px" }}>
								<span
									id="d_nama_setuju"
									style={{ fontWeight: "bold", textDecoration: "underline" }}
								>
									JAKA KUSHARYANTA, S.HUT.
								</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px", padding: "0 0 10px 10px" }}>
								<span id="d_job_buat" style={{ fontWeight: "bold", fontSize: "10pt" }}>
									ADMINISTRASI
								</span>
							</td>
							<td style={{ paddingLeft: "10px", padding: "0 0 10px 10px" }}>
								<span id="d_job_ketahui" style={{ fontWeight: "bold", fontSize: "10pt" }}>
									GROUP LEADER
								</span>
							</td>
							<td style={{ paddingLeft: "10px", padding: "0 0 10px 10px" }}>
								<span id="d_job_setuju" style={{ fontWeight: "bold", fontSize: "10pt" }}>
									SECTION HEAD
								</span>
							</td>
						</tr>
						<tr>
							<td style={{ paddingLeft: "10px", padding: "10px 0 10px 10px", fontSize: "8pt" }}>
								Tgl. <span id="d_jam_buat">2022-12-10 17:32:45</span>
							</td>
							<td style={{ paddingLeft: "10px", padding: "10px 0 10px 10px", fontSize: "8pt" }}>
								Tgl. <span id="d_jam_ketahui">2022-12-12 06:26:53</span>
							</td>
							<td style={{ paddingLeft: "10px", padding: "10px 0 10px 10px", fontSize: "8pt" }}>
								<span id="d_j_setuju">Tgl. 2022-12-12 07:37:37</span>
							</td>
						</tr>
					</tbody>
				</table>
			</Grid>
		</LayoutOverlayData>
	);
}
