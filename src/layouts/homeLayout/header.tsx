import Logo from '../../assets/logo.svg';
import { Link } from '@tanstack/react-location';
import AuthNav from './authNav';
import MobileNav from './mobile-nav';

const Header = () => {
	return (
		<header className='flex justify-between px-4 lg:px-10 items-center'>
			<nav className='flex items-center justify-between lg:justify-start gap-5 w-full lg:w-fit'>
				<Link to='/'>
					<img src={Logo} className='' alt='VisaProf' />
				</Link>

				<MobileNav />
				<ul className='gap-5 hidden lg:flex '>
					<li>
						<Link to='/' className='text-lg text-brand-text-600 font-semibold'>
							Agent information
						</Link>
					</li>
					<li>
						<Link to='/' className='text-lg text-brand-text-600 font-semibold'>
							Country requirements
						</Link>
					</li>
					<li>
						<Link to='/' className='text-lg text-brand-text-600 font-semibold'>
							About Us
						</Link>
					</li>
					<li>
						<Link to='/' className='text-lg text-brand-text-600 font-semibold'>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
			<AuthNav />
		</header>
	);
};

export default Header;
