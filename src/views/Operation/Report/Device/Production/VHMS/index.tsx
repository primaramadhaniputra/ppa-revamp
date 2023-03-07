import { useState } from "react";
import { convert, notify } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";
import DisplayData from "../DisplayData";
import TopFilter from "../TopFilter";
import { getOperationReport19 } from "services/operationReport";
import FilterLayouts from "src/components/layouts/FilterLayouts";
import { DataWrapper, Wrapper } from "./styles";
import { Grid } from "@hudoro/neron";
import TabV3 from "molecules/TabV3";

interface IProps {
	vhmsType: string;
}

const tabs = ["Statistik", "Detail", "Trend"];

export default function VHMS({ vhmsType }: IProps) {
	const [dataChart, setDataChart] = useState<IOperationReportPayloadData[]>();
	const [isLoading, setIsLoading] = useState(true);
	const [toDate, setToDate] = useState(new Date());
	const [fromDate, setFromDate] = useState(new Date());
	const [activeChart, setActiveChart] = useState(0);

	// use state for active tabs
	const [activeTab, setActiveTab] = useState(0);

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
				path: `vhms/${vhmsType}`,
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
				<Grid style={{ margin: "10px auto 10px" }}>
					<TabV3
						tabsData={tabs}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						containerStyles={{ border: "none" }}
						activeColor="#001a72"
					/>
				</Grid>
			)}
			<DataWrapper>
				{dataChart?.map((item, idx) => (
					<Wrapper key={idx} isActive={activeChart === idx} onClick={() => handleActiveChart(idx)}>
						<DisplayData data={item} isLoading={isLoading} type={activeTab} />
					</Wrapper>
				))}
			</DataWrapper>
		</>
	);
}
