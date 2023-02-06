import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcEllipse({ ...rest }: ISVGProps) {
	return (
		<svg {...rest} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="3" cy="3" r="3" fill="currentColor" />
		</svg>
	);
}
