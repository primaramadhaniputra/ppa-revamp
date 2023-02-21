import { useCallback, useEffect, useRef, useState } from "react";
import { IPromiseResult } from "./interfaces";

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}

export const useAsync = (
	asyncFuntion: () => Promise<IPromiseResult | IPromiseResult[]>,
	// payload: IPayload
	// args = [],
	deps: any[] = [],
	immediate = true,
) => {
	const isFirstUpdate = useRef(true);
	const [response, setResponse] = useState<IPromiseResult | IPromiseResult[] | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const execute = useCallback(() => {
		setLoading(true);
		setResponse(null);
		setError(null);
		// [...args] as IPayload
		return asyncFuntion()
			.then((response) => {
				const data = response;
				setResponse(data);
			})
			.catch((error: any) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [asyncFuntion]);
	// , args
	useEffect(() => {
		if (immediate) {
			execute();
		} else {
			if (!isFirstUpdate.current) {
				execute();
			}
		}
	}, [...deps]);
	useEffect(() => {
		isFirstUpdate.current = false;
	}, []);
	return { execute, response, error, loading };
};
