import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcEye({ ...rest }: ISVGProps) {
	return (
		<svg
			viewBox="64 64 896 896"
			focusable="false"
			data-icon="eye"
			{...rest}
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
		</svg>
	);
}
