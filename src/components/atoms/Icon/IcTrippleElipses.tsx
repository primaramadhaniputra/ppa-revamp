import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcTrippleElipses({ ...rest }: ISVGProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 20 21" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.3342 1.25H5.66518C2.64418 1.25 0.750183 3.389 0.750183 6.416V14.584C0.750183 17.611 2.63418 19.75 5.66518 19.75H14.3332C17.3642 19.75 19.2502 17.611 19.2502 14.584V6.416C19.2502 3.389 17.3642 1.25 14.3342 1.25Z"
				fill="white"
				stroke="#141BBE"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.9394 10.5127H13.9484H13.9394Z"
				fill="white"
			/>
			<path
				d="M13.9394 10.5127H13.9484"
				stroke="#141BBE"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.93038 10.5127H9.93938H9.93038Z"
				fill="white"
			/>
			<path
				d="M9.93038 10.5127H9.93938"
				stroke="#141BBE"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* <path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.9214 10.5127H5.9304H5.9214Z"
				fill="white"
			/> */}
			<path
				d="M5.9214 10.5127H5.9304"
				stroke="#141BBE"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
