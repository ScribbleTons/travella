import { useEffect, useState } from 'react';

const useMediaQuery = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [width]);
	return { width };
};

export default useMediaQuery;
