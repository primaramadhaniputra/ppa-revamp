import { Grid, Icon, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import { Wrapper } from "./styles";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "2022-10-07 14:25:14",
		["SMR"]: "7471",
		["Fuel Consumption Rate L/H"]: "127.2",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	isShowDetail
		? disableBodyScroll(Html as unknown as HTMLElement | Element)
		: enableBodyScroll(Html as unknown as HTMLElement | Element);

	return (
		<>
			<Wrapper
				style={{
					zIndex: isShowDetail ? 999 : -999,
					opacity: isShowDetail ? 1 : 0,
					top: `${formPosition}px`,
				}}
				onClick={handleCloseShowDetail}
			>
				<Grid
					container
					flexDirection="column"
					gap={20}
					style={{
						maxWidth: "800px",
						margin: "30px auto",
						backgroundColor: "white",
						padding: "20px 10px",
					}}
				>
					<Grid container alignItems="center" justifyContent="space-between">
						<Text variant="h3">E52015 Cycle Data</Text>
						<Icon
							iconName="IcClose"
							style={{ cursor: "pointer" }}
							onClick={handleCloseShowDetail}
						/>
					</Grid>
					<MigrateTable data={defaultDataTable} columns={columns} />
				</Grid>
			</Wrapper>
		</>
	);
}
