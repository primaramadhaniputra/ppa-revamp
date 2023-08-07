import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcLink({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24" fill="none">
			<path
				d="M8 12H16M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H15M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
