import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import StyledButton from "atoms/StyledButton";
import { colors, fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import { IcCloseCircleFilled, IcEdit } from "atoms/Icon";
import { Container } from "./styles";
import FormMultipleChoice from "./FormMultipleChoice";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["ID"]: "-",
		["Question"]: "-",
		["Subject"]: "-",
		["Group Subject"]: "-",
		["Type Question"]: "-",
		["Action"]: "-",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function Question() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	// multipel form choice state
	const [isShowMultipleForm, setIsShowMultipleForm] = React.useState(false);
	const [multipleFormPosition, setMultipleFormPosition] = React.useState(0);
	//

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const handleShowFormMultipleChoice = (target: { pageY: number; clientY: number }) => {
		setIsShowMultipleForm(true);
		setMultipleFormPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) => {
			return info.column.id === "Action" ? (
				<Grid container justifyContent="center" alignItems="center" gap={5}>
					<IcEdit width={20} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
					<IcCloseCircleFilled width={20} color={colors.blue} cursor="pointer" />
				</Grid>
			) : (
				info.renderValue()
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<FormMultipleChoice
				isShowDetail={isShowMultipleForm}
				setIsShowDetail={setIsShowMultipleForm}
				formPosition={multipleFormPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>DATA LIST POST TEST</TitleText>
				<Container style={{ flex: 1 }} gap={15}>
					<Grid container>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 0",
								fontWeight: fontWeights.bold,
								minWidth: "200px",
							}}
							onClick={handleShowFormMultipleChoice}
						>
							Add Multiple Choice
						</StyledButton>
					</Grid>
					<Grid container>
						<StyledButton
							style={{
								backgroundColor: colors.orange,
								fontSize: fontSizing.md.fontSize,
								padding: "5px 0",
								fontWeight: fontWeights.bold,
								minWidth: "150px",
							}}
							onClick={handleShowDetail}
						>
							Add essay
						</StyledButton>
					</Grid>
				</Container>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
