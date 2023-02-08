import React, { useMemo } from "react";
import { IconContainer, IconWrapper, Wrapper } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import { Icon } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

export const defaultDataTable = [
	{
		["No"]: "-",
		["Subject Group"]: `-`,
		["Name Quiz"]: `-`,
		["Total"]: "-",
		["Duration"]: "-",
		["Valid Date"]: "-",
		["Token"]: "-",
		["Action"]: "",
	},
];

const columnHelper = createColumnHelper<IProps>();

export default function Schedule() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const deleteQuestion = async () => {
		if (confirm("Are you sure to delete this question ? ")) {
			return alert("siiiiiiuuuuuuuuuuuuuuuuuuuuu");
		}
		return alert("siiiiiiuuuuuuuuuuuuuuuuuuuuu");
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Action" ? (
							<IconWrapper>
								<IconContainer title="edit">
									<IcEdit
										width={20}
										cursor="pointer"
										color="white"
										strokeWidth={1.5}
										onClick={(target) => handleShowDetail(target)}
									/>
								</IconContainer>
								<IconContainer title="delete">
									<Icon iconName="IcClose" color="white" onClick={deleteQuestion} />
								</IconContainer>
							</IconWrapper>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Wrapper>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</Wrapper>
		</>
	);
}
