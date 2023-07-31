import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcPaper({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 20 20" fill="none">
			<path d="M12.3053 13.4502H6.90527" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M10.2604 9.43848H6.90442" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1598 6.3L12.4898 0.9C11.7598 0.8 10.9398 0.75 10.0398 0.75C3.74978 0.75 1.64978 3.07 1.64978 10C1.64978 16.94 3.74978 19.25 10.0398 19.25C16.3398 19.25 18.4398 16.94 18.4398 10C18.4398 8.58 18.3498 7.35 18.1598 6.3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M11.9342 0.833008V3.49401C11.9342 5.35201 13.4402 6.85701 15.2982 6.85701H18.2492" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	);
}
