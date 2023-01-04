import React, { useMemo } from "react";
import { fontWeights } from "utils/styles";

import { createColumnHelper } from "@tanstack/react-table";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		Dept: "ENG",
		MP: "123",
		D: `12`,
		N: `12`,
		T: "12",
		IO: "12",
		NC: "12",
		L: "12",
		O: "12",
		S: "12",
		I: "12",
		A: "12",
		K: "12",
		P: "12",
		R: "12",
		H: "12",
		NR: "12",
		TOTAL: "120",
		ATR: "12%",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Detail() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				const id = info.column.id;
				return (
					<span
						style={{
							fontWeight:
								id === "Dept" || id === "TOTAL" || id === "ATR" || id === "MP"
									? fontWeights.bold
									: fontWeights.regular,
						}}
					>
						{info.getValue()}
					</span>
				);
			},
			footer: (info) => info.column.id,
		}),
	);
	return (
		<LayoutTable>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</LayoutTable>
	);
}
