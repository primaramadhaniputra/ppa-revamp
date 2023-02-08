import React, { useMemo } from "react";
import { Container, TextInfo, Wrapper } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import { Grid, Text } from "@hudoro/neron";
import { fontSizing, fontWeights } from "utils/styles";
import Image from "next/image";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		NRP: "-",
		Nama: "-",
		Posisi: `-`,
		Dept: "-",
		["Tanggal Induksi"]: "-",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function TidakSesuaiJadwal() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<Wrapper>
			<Container style={{ marginBottom: "20px" }}>
				<Grid container gap={10} alignItems="center">
					<Image
						width={35}
						height={35}
						quality={100}
						alt="logo"
						src={"http://ppa-mhu.net/assets/img/induksi/induksi_tdk_sesuai_jdwl.png"}
					/>

					<Text
						variant="h4"
						style={{
							fontWeight: fontWeights.bold,
							display: "flex",
							alignItems: "center",
							fontSize: fontSizing.xl.fontSize,
							color: "#4F5458",
						}}
					>
						Tidak sesuai jadwal
					</Text>
				</Grid>
				<TextInfo>24 orang</TextInfo>
			</Container>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</Wrapper>
	);
}
