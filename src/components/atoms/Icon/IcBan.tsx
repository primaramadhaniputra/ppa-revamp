import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcBan({ ...rest }: ISVGProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
			/>
		</svg>
	);
}
