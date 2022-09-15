import { ISelectItem, Select } from "@hudoro/neron";
import React, { useEffect, useState } from "react";
import { useLoginDefaultValue } from "recoil/loginDefaultValue/atom";
import { listPages, updatePages } from "services/pages";
import { notify } from "utils/functions";
import { SelectLabel } from "../../styles";
import { ArrowDown, Container } from "./styled";

export default function LoginForm() {
	const [layout, setLayout] = useState([]);
	const [isDisabled, setIsDisabled] = useState(true);
	const loginDefault = useLoginDefaultValue();

	useEffect(() => {
		setIsDisabled(true);
		listPages({
			path: "settings/pages",
		})
			.then((res) => {
				const newData = res.data.data
					.filter((item: { name: string }) => item.name === "LOGIN")
					.map((item: { id: any; pageId: any }) => {
						return {
							id: item.id,
							values: item.pageId.toString(),
							label: item.pageId.toString(),
						};
					});
				setLayout(newData);
				return setIsDisabled(false);
				// return notify("Berhasil mendapatkan layout", "success");
			})
			.catch((err) => {
				setIsDisabled(true);
				return notify(err.message, "error");
			});
	}, []);

	const handleChangeLayout = async (e: ISelectItem | ISelectItem[] | null) => {
		try {
			await updatePages({
				path: "settings/pages",
				body: {
					pageId: e?.values,
					name: "LOGIN",
				},
			});
			return notify("Berhasil mengubah layout", "success");
		} catch (error: any) {
			return notify(error.message, "error");
		}
	};

	return (
		<Container>
			<SelectLabel>Pilih layout login</SelectLabel>
			<Select
				items={layout}
				disabled={isDisabled}
				onChange={handleChangeLayout}
				placeholder="change layout"
				defaultValue={loginDefault}
			/>
			<ArrowDown />
		</Container>
	);
}
