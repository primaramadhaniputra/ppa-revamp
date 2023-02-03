import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcFilterList({ ...rest }: ISVGProps) {
	return (
		<svg {...rest} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.33325 9.33334H26.6666M9.33317 16H22.6665M14.6665 22.6667H17.3331"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
