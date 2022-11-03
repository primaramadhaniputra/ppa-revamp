import { Card, Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { colors } from "utils/styles";
import { Description, Title } from "./styles";

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
					{dataDummy.map((item, index) => (
						<Grid container alignItems="center" key={index} gap={10}>
							<Grid style={{ flex: 1 }}>
								<Title>{item.title}</Title>
							</Grid>
							<Grid style={{ flex: 2 }}>
								<Description>: {item.desc}</Description>
							</Grid>
						</Grid>
					))}
				</Grid>
				<Grid container gap={20}>
					{dataDummyTemuan.map((data, index) => (
						<Card key={index} style={{ flex: "1", boxShadow: "0 1px 3px rgba(0,0,0,.25)" }}>
							<Title style={{ marginBottom: "10px", color: colors.orange, minWidth: "250px" }}>
								{data.title}
							</Title>
							<Image src={data.imageUrl} width={200} height={200} layout="responsive" />
						</Card>
					))}
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
