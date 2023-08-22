import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcPlus({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 20 20" fill="none">
			<path d="M3.3335 9.99967H16.6668M10.0002 3.33301V16.6663" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	);
}
