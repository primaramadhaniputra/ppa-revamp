import { ISVGProps } from "utils/interfaces";

export default function IcCurvedArrow({ ...rest }: ISVGProps) {
	return (
		<svg {...rest} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M37.1032 22.836L26.2594 34.6008M37.1032 22.836L37.4486 31.3142M37.1032 22.836L28.625 23.1813"
				stroke="#001A72"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M23.5482 37.542L34.392 25.7771M23.5482 37.542L23.2028 29.0637M23.5482 37.542L32.0264 37.1966"
				stroke="#001A72"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
