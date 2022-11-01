import { Grid } from "@hudoro/neron";
import TitleText from "atoms/TitleText";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import JadwalInduksi from "./JadwalInduksi";
import { InduksiContainer } from "./styles";
import TidakInduksi from "./TidakInduksi";
import TidakSesuaiJadwal from "./TidakSesuaiJadwal";
import TopFilter from "./TopFilter";
import TotalInduksi from "./TotalInduksi";

export default function Induksi() {
	return (
		<>
			<LayoutTable style={{ margin: "10px 0" }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<TitleText>Induksi Monitoring</TitleText>
					<TopFilter />
				</Grid>
			</LayoutTable>
			<InduksiContainer>
				<JadwalInduksi />
				<TotalInduksi />
			</InduksiContainer>
			<InduksiContainer style={{ marginTop: "30px" }}>
				<TidakInduksi />
				<TidakSesuaiJadwal />
			</InduksiContainer>
		</>
	);
}
