import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcEdit({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 18 18" fill="none">
			<path
				d="M10.3352 16.5078H16.7122"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.0578 1.85877V1.85877C11.7138 0.850767 9.80779 1.12277 8.79979 2.46577C8.79979 2.46577 3.78679 9.14377 2.04779 11.4608C0.308791 13.7788 1.95379 16.6508 1.95379 16.6508C1.95379 16.6508 5.19779 17.3968 6.91179 15.1118C8.62679 12.8278 13.6638 6.11677 13.6638 6.11677C14.6718 4.77377 14.4008 2.86677 13.0578 1.85877Z"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.50415 4.21094L12.3682 7.86194"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
