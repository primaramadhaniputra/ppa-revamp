import React, { useState } from "react";
import IcBuilding from "atoms/Icon/IcBuilding";
import { Grid } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import { BreadCrumb, StyledInput } from "./styles";

const Create = () => {
	const [text, setText] = useState("");

	return (
		<div>
			<BreadCrumb>
				<li>
					<a href="#">
						<IcBuilding width={24} color="#000" />
					</a>
				</li>
				<li>
					<a href="#">Buat Formulir</a>
				</li>
			</BreadCrumb>
			<Grid container flexDirection="column" alignItems="center">
				<Grid container alignItems="center">
					<StyledInput
						autoFocus
						onChange={(e) => setText(e.target.value)}
						style={{ width: `${text.length}ch` }}
					/>
					<IcEdit width={16} color="#55b434" />
				</Grid>
			</Grid>
		</div>
	);
};

export default Create;
