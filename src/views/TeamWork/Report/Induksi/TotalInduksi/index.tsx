import React, { useMemo } from "react";
import { Container, TextInfo, Wrapper } from "./styles";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Grid, Icon, Text } from "@hudoro/neron";
import { fontSizing, fontWeights } from "utils/styles";
import ShowDetail from "./ShowDetail";
import Image from "next/image";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Nama: "Hd123",
		Posisi: `33${index}`,
		Dept: "2022-17-08",
		["Tanggal Detail"]: "2022-17-08",
		["Detail"]: "2022-17-08",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function TotalInduksi() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) =>
			info.column.id === "Detail" ? (
				<Icon
					iconName="IcSearch"
					color="white"
					onClick={handleShowDetail}
					style={{ cursor: "pointer", margin: 'auto' }}
				/>
			) : (
				info.renderValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Wrapper>
				<Container style={{ marginBottom: '20px' }}>
					<Grid container gap={10} alignItems="center">
						<Image
							width={35}
							height={35}
							quality={100}
							alt="logo"
							src={"http://ppa-mhu.net/assets/img/induksi/induksi_sesuai_jdwl.png"}
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
							Total Induksi
						</Text>
					</Grid>
					<TextInfo>24 orang</TextInfo>
				</Container>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</Wrapper>
		</>
	);
}
