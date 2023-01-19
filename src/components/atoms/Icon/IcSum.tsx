import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcSum({ ...rest }: ISVGProps) {
	return (
		<svg {...rest} viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect y="0.5" width="62" height="62" rx="8" fill="#D5E9EB" />
			<path
				d="M26.7895 17.1842V27.2895H16.6842C15.754 27.2895 15 28.0435 15 28.9737V45.8158C15 46.746 15.754 47.5 16.6842 47.5H33.5263C34.4565 47.5 35.2105 46.746 35.2105 45.8158V35.7105H45.3158C46.246 35.7105 47 34.9565 47 34.0263V17.1842C47 16.254 46.246 15.5 45.3158 15.5H28.4737C27.5435 15.5 26.7895 16.254 26.7895 17.1842Z"
				fill="#2F88FF"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
