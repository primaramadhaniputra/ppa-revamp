import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcInfo({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 14 14" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.00004 0.833008C10.4054 0.833008 13.1667 3.59367 13.1667 6.99967C13.1667 10.405 10.4054 13.1663 7.00004 13.1663C3.59404 13.1663 0.833374 10.405 0.833374 6.99967C0.833374 3.59367 3.59404 0.833008 7.00004 0.833008Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.99679 4.46875V7.41475"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.99663 9.5306H7.00329"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
