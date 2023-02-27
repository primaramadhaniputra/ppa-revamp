import { Grid, Text } from "@hudoro/neron";
import Loading from "atoms/Loading";
// import { useState } from "react";
import { IOperationReportPayloadData } from "utils/interfaces";
import { TotalText, Wrapper, WrapperTotalText } from "./styles";

import dynamic from "next/dynamic";
const ChartData = dynamic(() => import("./ChartData"), {
	ssr: false,
});
// const Trend = dynamic(() => import("./Trend"), {
// 	ssr: false,
// });
// const TableData = dynamic(() => import("./Table"), {
// 	ssr: false,
// });

interface IProps {
	data: IOperationReportPayloadData;
	isLoading: boolean;
}

// const typeDisplayData = [
// 	{
// 		id: 1,
// 		values: "Range Chart",
// 		label: "Range Chart",
// 	},
// 	{
// 		id: 0,
// 		values: "Range Data",
// 		label: "Range Data",
// 	},

// 	{
// 		id: 2,
// 		values: "Trend",
// 		label: "Trend",
// 	},
// ];

export default function DisplayData({ data, isLoading }: IProps) {
	// const [activeDisplayData, setActiveDisplayData] = useState(typeDisplayData[0].values);
	// const handleActiveDisplayData = (e: ISelectItem | ISelectItem[] | null) => {
	// 	return setActiveDisplayData(e?.values);
	// };

	// const renderDisplayData = (type: string) => {
	// 	if (type === "Range Data") {
	// 		return <TableData data={data?.data?.range.data} />;
	// 	}
	// 	if (type === "Trend") {
	// 		return <Trend datas={data?.data?.trend} />;
	// 	}
	// 	return <ChartData data={data?.data?.range?.data || [{}]} heigth={heigth} />;
	// };

	return (
		<>
			<Wrapper>
				{isLoading && <Loading />}
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					// flexDirection="column"
					gap={20}
					style={{ width: "100%" }}
				>
					<Text variant="h4">{data.site}</Text>
					<WrapperTotalText>
						<TotalText title="Total">∑ {data?.data?.total} </TotalText>|
						<TotalText title="Rata-rata">Avg {data?.data?.average} </TotalText>
					</WrapperTotalText>
				</Grid>
				<ChartData data={data?.data?.range?.data || [{}]} />
			</Wrapper>
			{/* <Grid style={{ maxWidth: "140px", margin: "0 auto 10px" }}>
				<Select
					onChange={handleActiveDisplayData}
					items={typeDisplayData}
					defaultValue={typeDisplayData[0]}
					placeholder="Choose.."
				/>
			</Grid> */}
			{/* {renderDisplayData(activeDisplayData)} */}
		</>
	);
}
