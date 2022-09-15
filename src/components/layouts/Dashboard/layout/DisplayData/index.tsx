import { Grid, ISelectItem, Select } from "@hudoro/neron";
import Loading from "atoms/Loading";
import React, { useEffect, useState } from "react";
import { IDropdownData, IOperationReportPayloadData } from "utils/interfaces";
import ChartData from "./ChartData";
import { TotalText, Wrapper, WrapperTotalText } from "./styles";
import TableData from "./Table";
import Trend from "./Trend";

interface IProps {
	data: IOperationReportPayloadData | undefined;
	isLoading: boolean;
	typeDisplayData: IDropdownData[];
}

export default function DisplayData({ data, isLoading, typeDisplayData }: IProps) {
	const [activeDisplayData, setActiveDisplayData] = useState(typeDisplayData[0].values);
	const handleActiveDisplayData = (e: ISelectItem | ISelectItem[] | null) => {
		return setActiveDisplayData(e?.values);
	};

	useEffect(() => {
		setActiveDisplayData(typeDisplayData[0].values);
	}, [typeDisplayData]);

	const renderDisplayData = (type: string) => {
		if (type === "Range Data") {
			return <TableData data={data?.range.data} />;
		}
		if (type === "Trend") {
			return <Trend datas={data?.trend} />;
		}
		return <ChartData data={data?.range.data || [{}]} />;
	};

	return (
		<Wrapper>
			{isLoading && <Loading />}
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
				flexDirection="column"
				gap={20}
				style={{ width: "100%" }}
			>
				<Grid style={{ maxWidth: "300px" }}>
					<Select
						onChange={handleActiveDisplayData}
						items={typeDisplayData}
						defaultValue={typeDisplayData[0]}
					/>
				</Grid>
				<WrapperTotalText>
					<TotalText>∑ {data?.total} </TotalText>
					<TotalText>Avg {data?.average} </TotalText>
				</WrapperTotalText>
			</Grid>
			{renderDisplayData(activeDisplayData)}
		</Wrapper>
	);
}
