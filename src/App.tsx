import { useState } from 'react';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import Home from './pages/home';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import NotFound from './pages/notFound';

const location = new ReactLocation();

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router
			location={location}
			routes={[
				{ path: '/', element: <Home /> },
				{ path: '/signin', element: <Signin /> },
				{ path: '/signup', element: <Signup /> },
				{ path: '*', element: <NotFound /> },
			]}>
			<Outlet />
		</Router>
	);
}

export default App;
