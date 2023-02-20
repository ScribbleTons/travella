import ad1 from '../../assets/ad-1.png';

import TopDestinations from './topDestinations';
import Offers from './offers';
import HeroSection from './heroSection';
import Destinations from './destinations';
import Testimonials from './testimonials';
import ContactForm from './contactForm';
import FAQs from './FAQs';
import HomeLayout from '../../layouts/homeLayout';


function Home() {

	return (
		<HomeLayout>
			<HeroSection />
			<section className='p-14 pb-40'>
				<div className='flex flex-col md:flex-row gap-10 justify-end items-center w-fit'>
					<div className=' px-2 lg:pl-40 py-10'>
						<h2 className='font-extrabold text-2xl text-secondary-600'>
							Africa&apos;s <span className='highlighted'>leading</span> visa
							consultants
						</h2>
						<p className='mt-10 text-md font-normal'>
							VISAPROF is a pioneer in Nigeria&apos;s online travel industry.
							The organization started in 2020 on the basis of an idea conceived
							by its promoters. VISAPROF is trusted by over 200 clients. We
							assist applicants in navigating the visa process to any country in
							which they choose to stay or visit.
						</p>
					</div>
					<div className='max-w-[540px]'>
						<img src={ad1} alt='' height={400} />
					</div>
				</div>
			</section>
			<Offers />
			<TopDestinations />
			<Destinations />
			<Testimonials />
			<FAQs />
			<ContactForm />
		</HomeLayout>
	);
}

export default Home;
