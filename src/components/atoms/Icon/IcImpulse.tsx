import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcImpulse({ ...rest }: ISVGProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
			viewBox="0 0 25 24"
			fill="none"
		>
			<circle cx="12.5" cy="12" r="12" fill="#ECEDFF" />
			<circle cx="12.5" cy="12" r="7" fill="currentColor" />
		</svg>
	);
}
