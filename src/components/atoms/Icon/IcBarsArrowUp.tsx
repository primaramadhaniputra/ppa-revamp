import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcBarsArrowUp({ ...rest }: ISVGProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			{...rest}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
			/>
		</svg>
	);
}
