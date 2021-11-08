import { useEffect, useState } from 'react';

const useResizeWindow = () => {
	const isInServer = typeof window !== 'undefined';

	const [windowSize, setWindowSize] = useState({
		width: isInServer ? 1200 : window.innerWidth,
		height: isInServer ? 800 : window.innerHeight,
	});

	useEffect(() => {
		window.addEventListener('resize', () =>
			setWindowSize({ width: window.innerWidth, height: window.innerHeight })
		);

		return () => {
			window.removeEventListener('resize', () =>
				setWindowSize({ width: window.innerWidth, height: window.innerHeight })
			);
		};
	}, []);

	return windowSize;
};

export default useResizeWindow;
