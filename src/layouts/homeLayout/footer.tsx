import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import { Link } from '@tanstack/react-location';

const Footer = () => {
	return (
		<footer className='border-t mt-5'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-5 py-6 px-4 sm:items-center sm:justify-items-center sm:justify-center'>
				<div className='flex justify-center gap-4'>
					<a href='#' target="_blank">
						<img src={facebook} alt='facebook' width={20} height={20} />
					</a>
					<a href='#' target="_blank">
						<img src={linkedin} alt='linkedin' width={20} height={20} />
					</a>
					<a href='#' target="_blank">
						<img src={whatsapp} alt='whatsapp' width={20} height={20} />
					</a>
					<a href='#' target="_blank">
						<img src={twitter} alt='twitter' width={20} height={20} />
					</a>
					<a href='#' target="_blank">
						<img src={instagram} alt='instagram' width={20} height={20} />
					</a>
				</div>

				<div>
					<h4 className='font-semibold text-secondary-600'>Company</h4>
					<ul>
						<li>
							<Link to='#' className='text-brand-text-200'>
								Home
							</Link>
						</li>
						<li>
							<Link to='#' className='text-brand-text-200'>
								About Us
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className='font-semibold text-secondary-600'>Legal</h4>
					<ul>
						<li>
							<Link to='#' className='text-brand-text-200'>
								Terms of service
							</Link>
						</li>
						<li>
							<Link to='#' className='text-brand-text-200'>
								Privacy policy
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className='font-semibold text-secondary-600'>Community</h4>
					<ul>
						<li>
							<Link to='#' className='text-brand-text-200'>
								Blog
							</Link>
						</li>
						<li>
							<Link to='#' className='text-brand-text-200'>
								FAQs
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className='font-semibold text-secondary-600'>Contact</h4>
					<ul>
						<li>
							<Link to='#' className='text-brand-text-200'>
								info@visaprof.com
							</Link>
						</li>
						<li>
							<Link to='#' className='text-brand-text-200'>
								07017401336
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='bg-secondary-600 px-4 py-4 text-center text-xl md:text-md text-white'>
				&copy; 2022 VISAPROF Visa processing firm. All rights reserved
			</div>
		</footer>
	);
};

export default Footer;
