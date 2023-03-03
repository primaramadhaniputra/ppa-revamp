import { useState } from "react";
import { convert, notify } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import DisplayData from "./DisplayData";
import TopFilter from "../TopFilter";
import { getOperationReport19 } from "services/operationReport";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { DataWrapper, Wrapper } from "./styles";
import { Grid, ISelectItem, Select } from "@hudoro/neron";
import { typeDisplayData } from "utils/dummy";

export default function Payload() {
	const [dataChart, setDataChart] = useState<IOperationReportPayloadData[]>();
	const [isLoading, setIsLoading] = useState(true);
	const [toDate, setToDate] = useState(new Date());
	const [fromDate, setFromDate] = useState(new Date());
	const [activeChart, setActiveChart] = useState(0);
	// for display data chart / bar / trend
	const [activeDisplayData, setActiveDisplayData] = useState(typeDisplayData[0].values);
	const handleActiveDisplayData = (e: ISelectItem | ISelectItem[] | null) => {
		return setActiveDisplayData(e?.values);
	};

	const handleActiveChart = (idx: number) => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
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
				path: "vhms/payloads",
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
			{dataChart && (
				<Grid style={{ maxWidth: "180px", margin: "10px auto 10px" }}>
					<Select
						onChange={handleActiveDisplayData}
						items={typeDisplayData}
						defaultValue={typeDisplayData[0]}
						placeholder="Choose.."
					/>
				</Grid>
			)}
			<DataWrapper>
				{dataChart?.map((item, idx) => (
					<Wrapper key={idx} isActive={activeChart === idx} onClick={() => handleActiveChart(idx)}>
						<DisplayData data={item} isLoading={isLoading} type={activeDisplayData} />
					</Wrapper>
				))}
			</DataWrapper>
		</>
	);
}
