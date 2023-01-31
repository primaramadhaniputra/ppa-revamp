import React from "react";

interface IProps {
	tableRef: React.MutableRefObject<null>;
}

const TableExcel = ({ tableRef }: IProps) => {
	return (
		<table ref={tableRef}>
			<thead>
				<tr>
					<th style={{ border: "1px solid black" }} rowSpan={2}>
						No
					</th>
					<th style={{ border: "1px solid black" }} rowSpan={2}>
						Identitas Pelanggan
					</th>
					<th style={{ border: "1px solid black" }} colSpan={3}>
						Kriteria Penilaian
					</th>
					<th style={{ border: "1px solid black" }} rowSpan={2}>
						Jumlah
					</th>
					<th style={{ border: "1px solid black" }} rowSpan={2}>
						Rata rata
					</th>
					<th style={{ border: "1px solid black" }} rowSpan={2}>
						Score
					</th>
				</tr>
				<tr>
					<th style={{ border: "1px solid black" }}>1</th>
					<th style={{ border: "1px solid black" }}>2</th>
					<th style={{ border: "1px solid black" }}>3</th>
				</tr>
			</thead>
			<tbody>
				<tr style={{ border: "1px solid black" }}>
					<td style={{ border: "1px solid black" }}>1</td>
					<td style={{ border: "1px solid black" }}>Dani</td>
					<td style={{ border: "1px solid black" }}>1</td>
					<td style={{ border: "1px solid black" }}>1</td>
					<td style={{ border: "1px solid black" }}>1</td>
					<td style={{ border: "1px solid black" }}>10</td>
					<td style={{ border: "1px solid black" }}>10</td>
					<td style={{ border: "1px solid black" }}>Good</td>
				</tr>
			</tbody>
			<tfoot>
				<tr style={{ border: "1px solid black" }}>
					<td colSpan={2} style={{ border: "1px solid black" }}>
						Sum
					</td>
					<td style={{ border: "1px solid black" }}>$180</td>
					<td style={{ border: "1px solid black" }}>$180</td>
					<td style={{ border: "1px solid black" }}>$180</td>
					<td style={{ border: "1px solid black" }}>$180</td>
					<td style={{ border: "1px solid black" }}>$180</td>
					<td style={{ border: "1px solid black" }}>$180</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default TableExcel;
