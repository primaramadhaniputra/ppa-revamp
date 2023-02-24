import React, { useEffect, useState } from "react";
import { convert, notify } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import DisplayData from "./DisplayData";
import TopFilter from "../TopFilter";
import { getOperationReport, getOperationReport19 } from "services/operationReport";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { Wrapper } from "../../styles";

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

	const getData = async (signal?: any) => {
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
				path: "payloads",
				...(signal && { signal }),
			});
			const data19 = await getOperationReport19({
				params: {
					startedDate: convert(fromDate),
					endedDate: convert(toDate),
				},
				headers: {
					Tenant: "MHU",
				},
				path: "vhms/payloads",
				...(signal && { signal }),
			});
			console.log("data19", data19.data.data);
			console.log("data1", data.data.data);
			setDataChart(data.data.data);
			setIsLoading(false);
			return notify("Berhasil mendapatkan data", "success");
		} catch (error: any) {
			setIsLoading(false);
			return signal.aborted == false && notify(error.message, "error");
		}
	};

	useEffect(() => {
		const abortController = new AbortController();
		getData(abortController.signal);
		return () => abortController.abort();
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
			<Wrapper>
				<DisplayData data={dataChart} isLoading={isLoading} />
			</Wrapper>
		</>
	);
}
