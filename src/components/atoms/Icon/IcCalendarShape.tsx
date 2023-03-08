import { ISVGProps } from "utils/interfaces";

export default function IcCalendarShape({ ...rest }: ISVGProps) {
	return (
		<svg {...rest} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13 1.5V5.5M7 1.5V5.5M18.4826 10.5H1.51733M18.4826 10.5C18.2743 4.79277 16.154 3 10 3C3.84596 3 1.7256 4.79277 1.51733 10.5M18.4826 10.5C18.4943 10.8208 18.5 11.154 18.5 11.5C18.5 18 16.5 20 10 20C3.5 20 1.5 18 1.5 11.5C1.5 11.154 1.50563 10.8208 1.51733 10.5"
				stroke="#969696"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
