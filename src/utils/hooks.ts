import React, { SetStateAction } from "react";

export const useViewport = () => {
	const [width, setWidth] = React.useState<SetStateAction<number>>(0);

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	// Return the width so we can use it in our components
	return { width };
};
