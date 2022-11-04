import { Grid } from "@hudoro/neron";
import { IcShortAscending } from "atoms/Icon";
import React, { useState } from "react";
import { dataText } from "utils/dummy";
import GlobalFilter from "./GlobalFilter";
import { StyledTable, Wrapper } from "./Styles";

const Table = () => {
	const [dataTable, setDataTable] = useState(dataText);
	return (
		<Wrapper>
			<GlobalFilter setDataTable={setDataTable} />
			<StyledTable>
				<thead>
					<tr>
						<th>
							<Grid container alignItems="center" gap={10}>
								<span style={{ flex: 1 }}>Date</span>
								<IcShortAscending width={18} />
							</Grid>
						</th>
						<th>
							<Grid container alignItems="center" gap={10}>
								<span style={{ flex: 1 }}>File Name</span>
								<IcShortAscending width={18} />
							</Grid>
						</th>
						<th>
							<Grid container alignItems="center" gap={10}>
								<span style={{ flex: 1 }}>MP</span>
								<IcShortAscending width={18} />
							</Grid>
						</th>
						<th>
							<Grid container alignItems="center" gap={10}>
								<span style={{ flex: 1 }}>Day</span>
								<IcShortAscending width={18} />
							</Grid>
						</th>
						<th>
							<Grid container alignItems="center" gap={10}>
								<span style={{ flex: 1 }}>Status</span>
								<IcShortAscending width={18} />
							</Grid>
						</th>
						<th>
							<Grid container alignItems="center" gap={10}>
								<span style={{ flex: 1 }}>Remark</span>
								<IcShortAscending width={18} />
							</Grid>
						</th>
					</tr>
				</thead>
				<tbody>
					{dataTable.length === 0 && (
						<tr>
							<td colSpan={6}>Data is not availaible</td>
						</tr>
					)}
					{dataTable.map((item, index) => (
						<tr key={index}>
							<td>{item.date}</td>
							<td>{item.fileName}</td>
							<td>{item.mp}</td>
							<td>{item.day}</td>
							<td>{item.status}</td>
							<td>{item.remark}</td>
						</tr>
					))}
				</tbody>
			</StyledTable>
		</Wrapper>
	);
};

export default Table;
