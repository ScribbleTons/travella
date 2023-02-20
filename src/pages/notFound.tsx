import { Link } from '@tanstack/react-location';

export default function NotFound() {
	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			
				<h2>Pele! This page no dey available.</h2>
				<Link to='/' className='highlighted font-bold text-lg text-center'>
					Go back home
				</Link>
		
		</div>
	);
}
