import { ISelectItem } from "@hudoro/neron";
import Loading from "atoms/Loading";
import { useState } from "react";
import { IOperationReportPayloadData } from "utils/interfaces";
import ChartData from "./ChartData";
import { Wrapper } from "./styles";
import TableData from "./Table";
import Trend from "./Trend";

interface IProps {
	data: IOperationReportPayloadData | undefined;
	isLoading: boolean;
	heigth: string;
}

const typeDisplayData = [
	{
		id: 1,
		values: "Range Chart",
		label: "Range Chart",
	},
	{
		id: 0,
		values: "Range Data",
		label: "Range Data",
	},

	{
		id: 2,
		values: "Trend",
		label: "Trend",
	},
];

export default function DisplayData({ data, isLoading, heigth }: IProps) {
	const [activeDisplayData, setActiveDisplayData] = useState(typeDisplayData[0].values);
	const handleActiveDisplayData = (e: ISelectItem | ISelectItem[] | null) => {
		return setActiveDisplayData(e?.values);
	};
	console.log("handleActiveDisplayData", handleActiveDisplayData);
	const renderDisplayData = (type: string) => {
		if (type === "Range Data") {
			return <TableData data={data?.range.data} />;
		}
		if (type === "Trend") {
			return <Trend datas={data?.trend} />;
		}
		return <ChartData data={data?.range?.data || [{}]} heigth={heigth} />;
	};

	return (
		<Wrapper>
			{isLoading && <Loading />}
			{/* <Grid
				container
				justifyContent="space-between"
				alignItems="center"
				flexDirection="column"
				gap={20}
				style={{ width: "100%" }}
			> */}
			{/* <Grid style={{ maxWidth: "300px" }}>
					<Select
						onChange={handleActiveDisplayData}
						items={typeDisplayData}
						defaultValue={typeDisplayData[0]}
					/>
				</Grid> */}
			{/* <WrapperTotalText>
					<TotalText>∑ {data?.total} </TotalText>
					<TotalText>Avg {data?.average} </TotalText>
				</WrapperTotalText> */}
			{/* </Grid> */}
			{renderDisplayData(activeDisplayData)}
		</Wrapper>
	);
}
