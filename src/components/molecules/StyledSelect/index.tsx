import React from "react";
import { Label } from "./styles";

const StyledSelect = () => {
	return (
		<Label className="switch">
			<input type="checkbox" />
			<span className="slider"></span>
		</Label>
	);
};

export default StyledSelect;
