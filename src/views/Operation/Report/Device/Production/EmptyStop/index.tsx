import { useState } from "react";
import { convert, notify } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import TopFilter from "../TopFilter";
import { getOperationReport19 } from "services/operationReport";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { DataWrapper, Wrapper } from "./styles";
// import { data } from "molecules/Charts/DoughnutChart";
import DisplayData from "../DisplayData";

export default function EmptyStop() {
	const [dataChart, setDataChart] = useState<IOperationReportPayloadData[]>();
	const [isLoading, setIsLoading] = useState(true);
	const [toDate, setToDate] = useState(new Date());
	const [fromDate, setFromDate] = useState(new Date());
	const [activeChart, setActiveChart] = useState(0);

	const handleActiveChart = (idx: number) => {
		return setActiveChart(idx);
	};

	const handleFromDate = (e: Date) => {
		setFromDate(e);
	};
	const handleToDate = (e: Date) => {
		setToDate(e);
	};

	const getData = async (signal?: any) => {
		try {
			setIsLoading(true);
			const data19 = await getOperationReport19({
				params: {
					startedDate: convert(fromDate),
					endedDate: convert(toDate),
				},
				// headers: {
				// 	Tenant: "MHU",
				// },
				path: "vhms/empty-stop",
				...(signal && { signal }),
			});
			setDataChart(data19.data.data);
			setIsLoading(false);
			return notify("Berhasil mendapatkan data", "success");
		} catch (error: any) {
			setIsLoading(false);
			return signal.aborted == false && notify(error.message, "error");
		}
	};

	// useEffect(() => {
	// 	const abortController = new AbortController();
	// 	getData(abortController.signal);
	// 	return () => abortController.abort();
	// }, []);

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
			<DataWrapper>
				{dataChart?.map((item, idx) => (
					<Wrapper key={idx} isActive={activeChart === idx} onClick={() => handleActiveChart(idx)}>
						<DisplayData data={item} isLoading={isLoading} isActive={activeChart === idx} />
					</Wrapper>
				))}
			</DataWrapper>
		</>
	);
}
