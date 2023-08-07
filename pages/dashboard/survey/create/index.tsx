import React, { useState } from "react";
import IcBuilding from "atoms/Icon/IcBuilding";
import { Grid, fontFamilies } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import styled from "styled-components";

const BreadCrumb = styled.div`
	display: flex;
	list-style: none;
	padding: 0;
	align-items: center;
	gap: 3.5px;
	font-family: ${() => fontFamilies.poppins};
	& li {
		margin-right: 10px;
		position: relative;
	}

	& li:last-child {
		color: #888;
	}
	& li::after {
		content: ">";
		color: #ccc;
		padding: 0 8px; /* Add padding to create a gap */
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	& li:last-child::after {
		content: "";
	}

	& li a {
		text-decoration: none;
		color: #007bff;
		transition: color 0.2s;
		font-size: 14px;
	}

	& li:last-child a {
		color: black;
	}

	& li:not(:last-child) a:hover {
		color: #0056b3;
	}
	& li:not(:last-child) {
		margin-right: 20px;
	}
`;
const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	font-family: ${fontFamilies.poppins};
	outline: none;
`;

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
