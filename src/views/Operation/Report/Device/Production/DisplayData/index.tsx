import { Grid, Text } from "@hudoro/neron";
import Loading from "atoms/Loading";
import { IOperationReportPayloadData } from "utils/interfaces";
import { TotalText, Wrapper, WrapperTotalText } from "./styles";

import dynamic from "next/dynamic";
import { numberWithCommas } from "utils/functions";
const ChartData = dynamic(() => import("./ChartData"), {
	ssr: false,
});

const Trend = dynamic(() => import("./Trend"), {
	ssr: false,
});
const TableData = dynamic(() => import("./Table"), {
	ssr: false,
});

interface IProps {
	data: IOperationReportPayloadData;
	isLoading: boolean;
	type: string;
}

export default function DisplayData({ data, isLoading, type }: IProps) {
	const renderDisplayData = () => {
		if (type === "Range Data") {
			return <TableData data={data?.data?.range.data} />;
		}
		if (type === "Trend") {
			return <Trend datas={data?.data?.trend} />;
		}
		return <ChartData data={data?.data?.range?.data || [{}]} />;
	};

	return (
		<>
			<Wrapper>
				{isLoading && <Loading />}
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					gap={20}
					style={{ width: "100%" }}
				>
					<Text variant="h4">{data.site}</Text>
					<WrapperTotalText>
						<TotalText title="Total">∑ {numberWithCommas(data?.data?.total)} </TotalText>|
						<TotalText title="Rata-rata">Avg {data?.data?.average} </TotalText>
					</WrapperTotalText>
				</Grid>
				{renderDisplayData()}
			</Wrapper>
		</>
	);
}
