import React, { useEffect, useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IcBan, IcEdit, IcRefresh } from "atoms/Icon";
import { IconContainer, Wrapper } from "./styles";
import {
	DisableUserdWebAdmin,
	getListUsersWebAdmin,
	ResetPasswordWebAdmin,
} from "services/webAdmin";
import { notify } from "utils/functions";
import { ISingleUser, IUserList } from "utils/interfaces";
import Loading from "atoms/Loading";
import FlyingForm from "./FlyingForm";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Html } from "next/document";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		NRP: "",
		Name: "",
		Dept: "",
		Position: "",
		Level: "",
		Action: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function AccessControl() {
	const [DataTable, setDataTable] = React.useState(defaultDataTable);
	const [isLoading, setIsLoading] = React.useState(true);
	const [isEdit, setIsEdit] = React.useState(false);
	const [dataUser, setDataUser] = React.useState<ISingleUser>();
	const router = useRouter();
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [formPosition, setformPosition] = useState(0);

	const handleEdit = async (target: any, e: { row: any }) => {
		const data = e.row.original;
		setDataUser(data);
		setIsEdit(true);
		setformPosition(target.pageY - target.clientY);
	};
	const handleResetPassword = async (e: any) => {
		const userID = e.row.original.Id;
		const userNrp = e.row.original.NRP;
		if (confirm("Are you sure to reset password ? ")) {
			try {
				await ResetPasswordWebAdmin({
					path: `reset-password/${userID}`,
					body: {
						newPassword: userNrp,
						confirmNewPassword: userNrp,
					},
				});
				notify("Berhasil mereset password user", "success");
				router.reload();
			} catch (error: any) {
				return notify(error.message, "error");
			}
		}
	};

	const disableUser = async (e: any) => {
		const userID = e.row.original.Id;
		if (confirm("Are you sure to disable user ? ")) {
			try {
				await DisableUserdWebAdmin({
					path: `delete/${userID}`,
				});
				notify("Berhasil disable user", "success");
				router.reload();
			} catch (error: any) {
				return notify(error.message, "error");
			}
		}
	};

	const getAllUsers = async () => {
		try {
			setIsLoading(true);
			const data = await getListUsersWebAdmin({
				params: {
					perPage: 100,
				},
			});
			const newData = data.data.data.map((item: IUserList) => {
				return {
					NRP: item.nrp,
					Name: item.fullName,
					Dept: item.department,
					Position: item.position,
					Level: item.level,
					Action: "",
					Id: item.id,
				};
			});
			setDataTable(newData);
			setIsLoading(false);
		} catch (error: any) {
			setIsLoading(false);
			return notify(error.message, "error");
		}
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return info.column.id === "Action" ? (
					<Wrapper>
						<IconContainer title="Edit">
							<IcEdit
								width={20}
								cursor="pointer"
								color="white"
								strokeWidth={1.5}
								onClick={(target) => handleEdit(target, info)}
							/>
						</IconContainer>
						<IconContainer title="Reset Password">
							<IcRefresh
								width={20}
								cursor="pointer"
								color="white"
								strokeWidth={1.5}
								onClick={() => handleResetPassword(info)}
							/>
						</IconContainer>
						<IconContainer title="Disable">
							<IcBan
								width={20}
								cursor="pointer"
								color="white"
								strokeWidth={2}
								onClick={() => disableUser(info)}
							/>
						</IconContainer>
					</Wrapper>
				) : (
					info.getValue()
				);
			},
			footer: (info) => info.column.id,
		}),
	);

	const closeEdit = () => {
		setIsEdit(false);
		setformPosition(0);
	};

	isEdit ? disableBodyScroll(Html as any) : enableBodyScroll(Html as any);

	return (
		<>
			<FlyingForm
				closeForm={closeEdit}
				isEdit={isEdit}
				dataUser={dataUser}
				formPosition={formPosition}
			/>
			<LayoutTable style={{ position: "relative" }}>
				{isLoading && <Loading />}
				<MigrateTable data={DataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
