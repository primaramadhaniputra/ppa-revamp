import React, { useEffect, useState } from "react";
import { convert, notify } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import DisplayData from "./DisplayData";
import TopFilter from "../TopFilter";
import { getOperationReport } from "services/operationReport";
import FilterLayouts from "src/components/layouts/FilterLayouts";

export default function Payload() {
	const [dataChart, setDataChart] = useState<IOperationReportPayloadData>();
	const [isLoading, setIsLoading] = useState(true);
	const [toDate, setToDate] = useState(new Date());
	const [fromDate, setFromDate] = useState(new Date());

	const handleFromDate = (e: Date) => {
		setFromDate(e);
	};
	const handleToDate = (e: Date) => {
		setToDate(e);
	};

	const getData = async () => {
		try {
			setIsLoading(true);
			const data = await getOperationReport({
				params: {
					startedAt: convert(fromDate),
					endedAt: convert(toDate),
				},
				headers: {
					Tenant: "MHU",
				},
				path: "/payloads",
			});
			setDataChart(data.data.data);
			setIsLoading(false);
			return notify("Berhasil mendapatkan data", "success");
		} catch (error: any) {
			setIsLoading(false);
			return notify(error.message, "error");
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<FilterLayouts>
				<TopFilter
					toDate={toDate}
					fromDate={fromDate}
					handleFromDate={handleFromDate}
					handleToDate={handleToDate}
					getData={getData}
				/>
			</FilterLayouts>
			<DisplayData data={dataChart} isLoading={isLoading} />
		</>
	);
}
