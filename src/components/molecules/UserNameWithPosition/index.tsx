import { Grid } from "@hudoro/neron";
import { IcEllipse } from "atoms/Icon";
import React from "react";
import { HeaderText } from "./styles";

interface Iprops {
	name: string;
	position: string;
}

const UserNameWithPosition = ({ name, position }: Iprops) => {
	return (
		<Grid container gap={8} alignItems="center">
			<HeaderText>{name}</HeaderText>
			<IcEllipse color="#D9D9D9" width={6} />
			<HeaderText>{position}</HeaderText>
		</Grid>
	);
};

export default UserNameWithPosition;
