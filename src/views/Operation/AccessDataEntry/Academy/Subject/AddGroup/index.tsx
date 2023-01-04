import { Grid } from "@hudoro/neron";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import LabeledInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React, { useMemo } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { StyledLabel, StyledTextarea } from "./styles";
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
		["Group Subject"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function AddGroup({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Form Create Post Test"
			>
				<Grid style={{ margin: "0px 0 10px" }}>
					<LabeledInput
						name="name"
						title="Subject Name"
						style={{ flexDirection: "row", alignItems: "center", gap: "20px" }}
					/>
				</Grid>
				<Grid container alignItems="center" gap={20} style={{ margin: "0px 0 10px" }}>
					<StyledLabel>Subject Group</StyledLabel>
					<StyledTextarea style={{ flex: 1, maxHeight: "100px", minHeight: "80px" }} />
				</Grid>
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ maxWidth: "200px" }}>Save</StyledButton>
				</Grid>
				<Grid style={{ padding: "0 10px", marginTop: "75px" }}>
					<MigrateTable data={defaultDataTable} columns={columns} />
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
