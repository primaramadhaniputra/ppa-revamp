import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcEqual({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" strokeWidth={2} {...rest} viewBox="0 0 20 14" fill="none">
			<path d="M0.5 0.5H19.5V5.86364H0.5V0.5ZM0.5 8.13636H19.5V13.5H0.5V8.13636Z" stroke="currentColor" />
		</svg>
	);
}
