import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcAlertCircle({ ...rest }: ISVGProps) {
	return (
		<svg
			{...rest}
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1727_7480)">
				<path
					d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
					stroke="#4696dd"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 6V9"
					stroke="#4696dd"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 12H9.0075"
					stroke="#4696dd"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1727_7480">
					<rect width="18" height="18" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
