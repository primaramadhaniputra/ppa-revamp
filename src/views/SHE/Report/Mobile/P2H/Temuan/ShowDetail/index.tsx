import { fontFamilies, Grid, Icon } from "@hudoro/neron";
import { IcCheckedSquare, IcSquare } from "atoms/Icon";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { fontWeights } from "utils/styles";
import { Table1 } from "./styles";

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
			title="PEMERIKSAAN PERAWATAN HARIAN "
			width={1400}
		>
			<Grid>
				<Table1 width="100%">
					<tbody>
						<tr>
							<td rowSpan={3}>
								<img
									src="http://ppa-mhu.net/assets/img/logo-only.png"
									alt=""
									style={{ width: "50px" }}
								/>
							</td>
							<td rowSpan={3} style={{ fontWeight: fontWeights.bold }}>
								FORMULIR
								<br />
								PEMERIKSAAN PERAWATAN HARIAN (P2H)
								<br />
								<span id="d_judul">DUMP TRUCK (DT)</span>
							</td>
							<td>No Dokumen</td>
							<td>
								<span id="d_doc_no">PPA-F-SHE-24j-R1</span>
							</td>
						</tr>
						<tr>
							<td>Revisi</td>
							<td>01</td>
						</tr>
						<tr>
							<td>Tanggal Efektif</td>
							<td>
								<span id="d_rev_date">2020-05-27</span>
							</td>
						</tr>
					</tbody>
				</Table1>
			</Grid>
			<Grid style={{ margin: "20px 0" }}>
				<Table1 width="100%">
					<tbody>
						<tr>
							<td rowSpan={2} style={{ fontWeight: fontWeights.bold }}>
								<b>Nama Opt</b>
							</td>
							<td rowSpan={2}>
								<span id="d_namaopr">A'AN</span>
							</td>
							<td rowSpan={3} style={{ fontWeight: fontWeights.bold }}>
								<b>MENYATAKAN BAHWA SEMUA ITEM TELAH DIPERIKSA DAN UNIT</b>
							</td>
							<td>Mengetahui,</td>
							<td>Dilakukan Oleh,</td>
						</tr>
						<tr>
							<td>Group Leader</td>
							<td>Operator</td>
						</tr>
						<tr>
							<td rowSpan={2} style={{ fontWeight: fontWeights.bold }}>
								Kode Unit
							</td>
							<td rowSpan={2}>
								<span id="d_kode_unit">P54117</span>
							</td>
							<td rowSpan={2}>
								<img
									src="http://ppa-mhu.net/assets/img/appr.jpeg"
									alt=""
									id="img-appr-atasan"
									width={70}
								/>
								<img
									src="http://ppa-mhu.net/assets/img/stop_op.jpeg"
									alt=""
									id="img-stop-atasan"
									width={70}
									style={{ display: "none" }}
								/>
							</td>
							<td rowSpan={2}>
								<img src="http://ppa-mhu.net/assets/img/appr.jpeg" alt="" width={70} />
							</td>
						</tr>
						<tr>
							<td>
								{" "}
								<IcCheckedSquare width={16} style={{ verticalAlign: "middle" }} /> SIAP OPERASI
							</td>
						</tr>
						<tr>
							<td rowSpan={2} style={{ fontWeight: fontWeights.bold }}>
								Date/Tgl
							</td>
							<td rowSpan={2}>
								<span id="d_tanggal">2022-10-31</span>
							</td>
							<td>
								{" "}
								<IcSquare width={16} style={{ verticalAlign: "middle" }} /> SIAP OPERASI BERSYARAT
							</td>
							<td>
								( <span id="d_namagl">SYAHRANI</span> )
							</td>
							<td>
								( <span id="d_nama">A'AN</span> )
							</td>
						</tr>
						<tr>
							<td>
								{" "}
								<IcSquare width={16} style={{ verticalAlign: "middle" }} /> TIDAK SIAP OPERASI
							</td>
							<td>
								Date : <span id="d_tgl_gl">2022-10-31</span>
							</td>
							<td>
								Date : <span id="d_tgl_opr">2022-10-31</span>
							</td>
						</tr>
					</tbody>
				</Table1>
			</Grid>
			<Grid>
				<Table1 width="100%" style={{ border: "none" }}>
					<tbody>
						<tr style={{ border: "none" }}>
							<td style={{ padding: "0px 5px", border: "none" }}>
								<b>SHIFT</b>
							</td>
							<td style={{ padding: "0px 5px", border: "none" }}>
								<IcSquare width={16} style={{ verticalAlign: "middle" }} /> I
							</td>
							<td style={{ padding: "0px 5px", border: "none" }}>
								<IcCheckedSquare width={16} style={{ verticalAlign: "middle" }} /> II
							</td>
							<td style={{ padding: "0px 5px", border: "none" }}>
								Jam Pemeriksaan : <span id="d_jam">20:02:44</span>
							</td>
							<td style={{ padding: "0px 5px", border: "none" }}>
								Hazard Code :
								<span
									style={{
										fontWeight: "bold",
										padding: "0px 3px",
										backgroundColor: " rgb(46, 206, 245)",
									}}
									id="d_code"
								>
									L
								</span>
								<span id="d_hazard_code">OK</span>
							</td>
						</tr>
					</tbody>
				</Table1>
			</Grid>
			<Grid style={{ margin: "30px 0" }}>
				<Table1 width="100%">
					<tbody>
						<tr style={{ border: "none" }}>
							<td
								style={{
									padding: " 0px 5px",
									textAlign: "center",
									border: "none",
									fontWeight: fontWeights.bold,
									fontSize: "16px",
								}}
							>
								<b>Pemeriksaan</b>
							</td>
						</tr>
					</tbody>
				</Table1>
			</Grid>
			<Grid>
				<Table1 cellPadding="0" cellSpacing="0" width="100%">
					<tr>
						<th style={{ textAlign: "center" }}>No</th>
						<th style={{ textAlign: "center" }}>Jenis</th>
						<th style={{ textAlign: "center" }}>Normal</th>
						<th style={{ textAlign: "center" }}>Abnormal</th>
						<th style={{ textAlign: "center" }}>NA</th>
						<th style={{ textAlign: "center" }}>Ket</th>
					</tr>
					<tr>
						<td style={{ width: "5%", textAlign: "center" }}>1</td>
						<td style={{ width: "30%" }}>Bahan Bakar</td>
						<td style={{ width: "7%", textAlign: "center" }}>
							<Icon iconName="IcCheck" />
						</td>
						<td style={{ width: "7%", textAlign: "center" }}></td>
						<td style={{ width: "7%", textAlign: "center" }}></td>
						<td style={{ width: "34%" }}></td>
					</tr>
				</Table1>
			</Grid>
			<Grid style={{ marginTop: "30px" }}>
				<table
					width="100%"
					style={{ border: "solid 1px rgba(0,0,0,0.3)", fontFamily: fontFamilies.poppins }}
				>
					<tbody>
						<tr style={{ height: "100px" }}>
							<td style={{ padding: " 10px 5px", verticalAlign: "top" }}>Note :</td>
							{/* 
							<td colSpan={4} style={{ padding: " 0px 5px", verticalAlign: "top", textAlign: "justify" }}>
								<span id="d_remark">.</span>
							</td> */}
						</tr>
					</tbody>
				</table>
			</Grid>
		</LayoutOverlayData>
	);
}
