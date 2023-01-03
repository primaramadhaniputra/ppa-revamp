import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import FlyingForm from "./FlyingForm";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["TGL Kejadian"]: "-",
		["Korban"]: "-",
		["Kategori"]: "-",
		["Kerugian"]: "-",
		["Deskripsi"]: "-",
		["File"]: "-",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function BottomTable() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};


	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Grid style={{ maxWidth: "max-content" }}>
				<StyledButton
					style={{
						backgroundColor: colors.primary,
						padding: "5px",
						fontWeight: fontWeights.semi,
						fontSize: fontSizing.sm.fontSize,
					}}
					onClick={handleShowDetail}
				>
					📦 Data
				</StyledButton>
			</Grid>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
