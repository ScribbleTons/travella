import { Link } from '@tanstack/react-location';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { useAuthContext } from '../../../hooks/useAuthUser';

export default function MobileNav() {
	const [open, setOpen] = useState(false);
	const { user, signout } = useAuthContext();

	return (
		<>
			{open && (
				<nav
					className={`fixed ${
						open ? 'block' : 'hidden'
					} top-0 left-0  px-6  lg:hidden z-50 h-full w-screen bg-white`}>
					<div className='flex relative items-center justify-between'>
						<Link onClick={() => setOpen((o) => !o)} to='/'>
							<div className='h-10 w-40 relative'>
								<img src={logo} alt='travella' width={200} />
							</div>
						</Link>

						<span
							className='text-gray-500 text-2xl absolute top-4 right-5'
							onClick={() => setOpen((o) => !o)}>
							&#10005;
						</span>
					</div>
					<ul className='gap-5 flex flex-col mt-20'>
						<li>
							<Link
								to='/'
								onClick={() => setOpen((o) => !o)}
								className='text-lg text-brand-text-600 font-semibold'>
								Agent information
							</Link>
						</li>
						<li>
							<Link
								to='/'
								onClick={() => setOpen((o) => !o)}
								className='text-lg text-brand-text-600 font-semibold'>
								Country requirements
							</Link>
						</li>
						<li>
							<Link
								to='/'
								onClick={() => setOpen((o) => !o)}
								className='text-lg text-brand-text-600 font-semibold'>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to='/'
								onClick={() => setOpen((o) => !o)}
								className='text-lg text-brand-text-600 font-semibold'>
								Contact Us
							</Link>
						</li>
					</ul>
					{!!user ? (
						<div className='my-10'>
							<p className='mb-6'>
								<Link
									onClick={() => setOpen((o) => !o)}
									to='/'
									className='text-decoration-none font-medium 
									active:text-primary bg-primary-100 px-4 py-2 rounded-lg'>
									My Account
								</Link>
							</p>
							<p className='mb-6'>
								<a href='#' className='text-red-600 font-semibold' onClick={signout}>
									Sign Out
								</a>
							</p>
						</div>
					) : (
						<nav className='flex justify-center gap-4 mt-40'>
							<Link
								onClick={() => setOpen((o) => !o)}
								to='/signin'
								className='w-fit h-fit px-4 py-2 md:py-6 rounded-[15px] flex-1
								text-lg text-brand-text-600 font-semibold text-center
								border-[1.5px] leading-tight border-primary-600 '>
								Sign In
							</Link>

							<Link
								to='/signup'
								className='w-fit h-fit px-4 py-2 md:py-6 rounded-[15px]  flex-1
								text-lg leading-tight text-brand-text-600 font-semibold text-white text-center
								bg-primary-600
								'
								type='button'>
								Sign Up
							</Link>
						</nav>
					)}
				</nav>
			)}
			<nav className='lg:hidden'>
				<svg
					onClick={() => setOpen((o) => !o)}
					role='button'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='w-8 h-8'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
					/>
				</svg>
			</nav>
		</>
	);
}
