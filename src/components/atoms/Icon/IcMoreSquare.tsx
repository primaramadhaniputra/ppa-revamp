import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcMoreSquare({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 20 20" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.3342 0.75H5.6652C2.6442 0.75 0.7502 2.889 0.7502 5.916V14.084C0.7502 17.111 2.6342 19.25 5.6652 19.25H14.3332C17.3642 19.25 19.2502 17.111 19.2502 14.084V5.916C19.2502 2.889 17.3642 0.75 14.3342 0.75Z"
				fill="white"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.9394 10.0127H13.9484H13.9394Z"
				fill="white"
			/>
			<path
				d="M13.9394 10.0127H13.9484"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path fillRule="evenodd" clipRule="evenodd" d="M9.9304 10.0127H9.9394H9.9304Z" fill="white" />
			<path
				d="M9.9304 10.0127H9.9394"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path fillRule="evenodd" clipRule="evenodd" d="M5.9214 10.0127H5.9304H5.9214Z" fill="white" />
			<path
				d="M5.9214 10.0127H5.9304"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
