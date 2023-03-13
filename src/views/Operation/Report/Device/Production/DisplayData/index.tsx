import { Grid, Text } from "@hudoro/neron";
import Loading from "atoms/Loading";
import { IOperationReportPayloadData } from "utils/interfaces";
import { ActiveWrapperTotal, ChartContainer, TotalText, Wrapper, WrapperTotalText } from "./styles";

import dynamic from "next/dynamic";
import { numberWithCommas } from "utils/functions";
import { fontWeights } from "utils/styles";

const ChartDataPayload = dynamic(() => import("../Payload/DisplayData/ChartData"), {
	ssr: false,
});
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
	type: number;
	isActive: boolean;
	vhmsType: string;
}

export default function DisplayData({ data, isLoading, type, isActive, vhmsType }: IProps) {
	const renderDisplayData = () => {
		if (type === 1) {
			return <TableData data={data?.data?.range.data} />;
		}
		if (type === 2) {
			return <Trend datas={data?.data?.trend} isActive={isActive} />;
		}
		return vhmsType === "payloads" ? (
			<ChartDataPayload data={data?.data?.range?.data || [{}]} isActive={isActive} />
		) : (
			<ChartData data={data?.data?.range?.data || [{}]} isActive={isActive} />
		);
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
					<Text variant="h4" style={{ fontWeight: fontWeights.semi }}>
						Site {data.site}
					</Text>
				</Grid>
				<ActiveWrapperTotal isActiveChart={isActive}>
					{(type === 0 || type === 2) && (
						<WrapperTotalText isActiveChart={isActive}>
							<TotalText
								title="Rata-rata"
								style={{ fontSize: "24px", lineHeight: "36px" }}
								isActiveChart={isActive}
							>
								<span>Average</span> {""}
								{isActive && <br />}
								<span className="data">{data?.data?.average}%</span>
							</TotalText>
							<TotalText title="Total" isActiveChart={isActive}>
								<span>Total</span>
								{isActive && <br />} {""}
								<span className="data">{numberWithCommas(data?.data?.total)}</span>
							</TotalText>
						</WrapperTotalText>
					)}
					<ChartContainer>{renderDisplayData()}</ChartContainer>
				</ActiveWrapperTotal>
			</Wrapper>
		</>
	);
}
