import { Grid } from "@hudoro/neron";
import { IcShortAscending } from "atoms/Icon";
import React from "react";
import { Dummy } from "utils/dummy";
import GlobalFilter from "./GlobalFilter";
import { StyledTable, Wrapper } from "./Styles";

const Table = () => {
	return (
		<Wrapper>
			<GlobalFilter />
			<StyledTable>
				<thead>
					<tr role="row">
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
					{Dummy.map((item, index) => (
						<tr key={index}>
							{item.data.map((item) => (
								<td>{item}</td>
							))}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</Wrapper>
	);
};

export default Table;
