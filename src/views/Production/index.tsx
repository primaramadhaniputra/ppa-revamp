import { Grid } from "@hudoro/neron";
import Loading from "atoms/Loading";
import TitlePage from "atoms/TitlePage";
import { useEffect, useState } from "react";
import { getAllSiteProduction } from "services/production";
import { convert, notify } from "utils/functions";
import { IProductionSites } from "utils/interfaces";
import Product from "./Product";
import TopFilter from "./TopFIlter";

export default function Production() {
	const [activeTabs, setActiveTabs] = useState<string>("");
	const [activeType, seActivetType] = useState(false);
	const [sites, setSites] = useState<IProductionSites[]>();
	const [isLoading, setIsLoading] = useState(true);

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const getSites = async () => {
		try {
			setIsLoading(true);
			const startTime = convert(Date.parse(date[0].startDate as unknown as string));
			const endTime = convert(Date.parse(date[0].endDate as unknown as string));
			const data = await getAllSiteProduction({
				params: {
					start: startTime,
					end: endTime,
					type: activeType ? "TC" : "JS",
				},
			});
			setSites(data.data as any);
			setIsLoading(false);
			return notify("Berhasil mendapatkan data", "success");
		} catch (error: any) {
			setIsLoading(false);
			return notify(error.message, "error");
		}
	};

	useEffect(() => {
		getSites();
	}, [date[0].endDate, activeType]);

	const handleChangeActiveType = () => {
		seActivetType(!activeType);
	};

	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Production / Report
			</TitlePage>
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
				<Product sites={sites as IProductionSites[]} />
			)}
		</>
	);
}
