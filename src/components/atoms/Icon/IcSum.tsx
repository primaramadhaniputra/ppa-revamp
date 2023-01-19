import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcSum({ ...rest }: ISVGProps) {
	return (
		<svg {...rest} viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.7895 3.18421V13.2895H3.68421C2.75405 13.2895 2 14.0435 2 14.9737V31.8158C2 32.746 2.75405 33.5 3.68421 33.5H20.5263C21.4565 33.5 22.2105 32.746 22.2105 31.8158V21.7105H32.3158C33.246 21.7105 34 20.9565 34 20.0263V3.18421C34 2.25405 33.246 1.5 32.3158 1.5H15.4737C14.5435 1.5 13.7895 2.25405 13.7895 3.18421Z"
				fill="currentColor"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
