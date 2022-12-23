import { Card, Grid } from "@hudoro/neron";
import TextBetween from "molecules/TextBetween";
import Image from "next/image";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { colors } from "utils/styles";
import { Title } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const dataDummy = [
	{
		title: "Pelapor",
		desc: "PRO - 22002929 - ILHAM DARY WIBOWO",
	},
	{
		title: "Kategori",
		desc: "Tidak menggikuti prosedur",
	},
	{
		title: "Deskripsi",
		desc: "Melepas apd saat bekerja",
	},
	{
		title: "Lokasi",
		desc: "Seam 70 Pit Timur SST",
	},
	{
		title: "Detail Lokasi",
		desc: "Pit Sentuk tmju baru",
	},
	{
		title: "Departement",
		desc: "PRO",
	},
	{
		title: "PIC Emp",
		desc: "22002929 - ILHAM DARY WIBOWO",
	},
	{
		title: "Status",
		desc: "Open",
	},
	{
		title: "Tanggal Dibuat",
		desc: "2022-09-26 13:13:09",
	},
];

const dataDummyTemuan = [
	{
		title: "Temuan",
		imageUrl: "/images/traktor.jpeg",
	},
	{
		title: "Tindakan Perbaikan",
		imageUrl: "/images/traktor.jpeg",
	},
];

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="KT09/SHE/2209/PTTA/01928"
			>
				<Grid container flexDirection="column" gap={10} style={{ padding: "0 10px 20px" }}>
					<TextBetween dummyData={dataDummy} />
				</Grid>
				<Grid container gap={50} justifyContent="center" style={{ marginTop: "20px" }}>
					{dataDummyTemuan.map((data, index) => (
						<Card key={index} style={{ flex: "1", maxWidth: "350px" }}>
							<Title style={{ marginBottom: "10px", color: colors.orange, minWidth: "250px" }}>
								{data.title}
							</Title>
							<Image
								src={data.imageUrl}
								width={200}
								height={200}
								layout="responsive"
								style={{ borderRadius: "5px" }}
							/>
						</Card>
					))}
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
