import { Link } from '@tanstack/react-location';
import { useState, useRef } from 'react';
import { useAuthContext } from '../../../hooks/useAuthUser';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const AuthNav = () => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useOnClickOutside(ref, () => setOpen(() => false));
	const { user, signout } = useAuthContext();
	return !user ? (
		<div className='hidden lg:block'>
			<nav className='flex gap-4'>
				<Link
					to='/signin'
					className='w-fit h-fit px-4 py-2 rounded-[15px] 
                    text-lg text-brand-text-600 font-semibold
                    border-[1.5px] leading-tight border-primary-600 '>
					Sign In
				</Link>

				<button
					id='dropdownDelayButton'
					data-dropdown-toggle='dropdownDelay'
					data-dropdown-delay='500'
					data-dropdown-trigger='hover'
					className='w-fit h-fit px-4 py-2 rounded-[15px] 
                    text-lg leading-tight text-brand-text-600 font-semibold text-white
                    bg-primary-600
                    '
					type='button'>
					Sign Up
				</button>

				<div
					id='dropdownDelay'
					className='z-10 w-fit -inset-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700'>
					<ul
						className='py-2 text-sm text-gray-700 dark:text-gray-200'
						aria-labelledby='dropdownDelayButton'>
						<li>
							<Link
								to='/signup'
								className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
								Sign up as myself
							</Link>
						</li>
						<hr />
						<li>
							<Link
								to='/signup'
								className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
								Sign up as myself
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	) : (
		<div className='relative' onClick={() => setOpen((o) => !o)}>
			<button
				id='dropdownNavbarLink'
				data-dropdown-toggle='dropdownNavbar'
				className='items-center justify-between hidden md:flex
                        w-full py-2 pl-3 pr-4 font-medium text-gray-700 
                        rounded
                        md:border-0 md:hover:text-primary md:p-0 
                        md:w-aut
                        md:dark:hover:bg-transparent 
                        '>
				{user?.firstName}
				<svg
					className='w-5 h-5 ml-1'
					aria-hidden='true'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M5.293 7.293a1 1 	0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>

			<div
				ref={ref}
				id='dropdownNavbar'
				className={`z-10 ${open ? 'block' : 'hidden'}  absolute right-3
                    font-normal bg-white divide-y
                    divide-gray-100 rounded-lg shadow w-44 
                    ease-in-out transition-all
                    `}>
				<ul
					className='py-2 text-sm text-gray-700 dark:text-gray-400'
					aria-labelledby='dropdownLargeButton'>
					<li>
						<Link
							to={`/d/${user?.firstName}`}
							className='block px-4 py-2 hover:bg-gray-100 text-gray-800'>
							Dashboard
						</Link>
					</li>
				</ul>
				<div className='py-1'>
					<a
						onClick={signout}
						href='#'
						className='block px-4 py-2 text-sm  hover:bg-gray-100 text-gray-800'>
						Sign out
					</a>
				</div>
			</div>
		</div>
	);
};

export default AuthNav;
