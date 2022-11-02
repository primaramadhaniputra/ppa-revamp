import React from "react";
import { ISVGProps } from "utils/interfaces";

export default function IcSquare({ ...rest }: ISVGProps) {
	return (
		<svg fill="currentColor" aria-hidden="true" focusable="false" {...rest} viewBox="0 0 1024 1024">
			<path d="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z"></path>
		</svg>
	);
}
