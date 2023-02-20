import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import Home from './pages/home';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import NotFound from './pages/notFound';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '../hooks/useAuthUser';


const location = new ReactLocation();

function App() {
	
	return (
		<AuthProvider>
			<Router
				location={location}
				routes={[
					{ path: '/', element: <Home /> },
					{ path: '/signin', element: <Signin /> },
					{ path: '/signup', element: <Signup /> },
					{ path: '*', element: <NotFound /> },
				]}>
				<Outlet />
				<Toaster position='top-right' />
			</Router>
		</AuthProvider>
	);
}

export default App;
