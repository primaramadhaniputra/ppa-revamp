import { Grid } from "@hudoro/neron";
import Loading from "atoms/Loading";
import TitlePage from "atoms/TitlePage";
// import FilteredDate from "molecules/FilteredDate";
import React, { useEffect, useState } from "react";
import { getAllSiteProduction } from "services/production";
import { convert, notify } from "utils/functions";
import { allSites, ITotalAllSites } from "utils/interfaces";
import Product from "./Product";
import TopFilter from "./TopFIlter";

export default function Production() {
	const [activeTabs, setActiveTabs] = useState<number>();
	const [activeType, seActivetType] = useState(false);
	const [sites, setSites] = useState<allSites[]>();
	const [totalDataSites, setTotalDataSites] = useState<ITotalAllSites>();
	const [isLoading, setIsLoading] = useState(true);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	useEffect(() => {
		if (activeTabs === 0) {
			const date = new Date();
			const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
			setDate([
				{
					startDate: firstDay,
					endDate: new Date(),
					key: "selection",
				},
			]);
		} else if (activeTabs === 1) {
			const date = new Date();
			date.setMonth(0);
			const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
			setDate([
				{
					startDate: firstDay,
					endDate: new Date(),
					key: "selection",
				},
			]);
		} else if (activeTabs === 2) {
			const date = new Date();
			date.setDate(date.getDate() - 7);
			setDate([
				{
					startDate: date,
					endDate: new Date(),
					key: "selection",
				},
			]);
		}
	}, [activeTabs]);

	const getSites = async () => {
		try {
			setIsLoading(true);
			const startTime = convert(Date.parse(date[0].startDate as unknown as string));
			const endTime = convert(Date.parse(date[0].endDate as unknown as string));

			const data = await getAllSiteProduction({
				params: {
					start: startTime,
					end: endTime,
					type: activeType ? "tc" : "js",
				},
			});
			setSites(data.data.data.resource);
			setTotalDataSites(data.data.data.total);
			setIsLoading(false);
			return notify("Berhasil mendapatkan data", "success");
		} catch (error: any) {
			setIsLoading(false);
			return notify(error.message, "error");
		}
	};

	useEffect(() => {
		getSites();
	}, [date, activeType]);

	const handleChangeActiveType = () => {
		seActivetType(!activeType);
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Production / Report
			</TitlePage>
			{/* <FilteredDate /> */}
			<TopFilter
				activeTabs={activeTabs}
				setActiveTabs={setActiveTabs}
				date={date}
				setDate={setDate}
				handleChangeActiveType={handleChangeActiveType}
			/>
			{isLoading ? (
				<Grid style={{ marginTop: 100, position: "relative" }}>
					<Loading />
				</Grid>
			) : (
				<Product sites={sites as allSites[]} totalDataSites={totalDataSites as ITotalAllSites} />
			)}
		</>
	);
}
