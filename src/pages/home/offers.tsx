import icon1 from './svgs/icon-1.svg';
import icon2 from './svgs/icon-2.svg';
import icon3 from './svgs/icon-3.svg';
import icon4 from './svgs/icon-4.svg';
export default function Offers() {
	return (
		<section className='pb-28'>
			<h2 className='font-bold text-2xl text-secondary-600 text-center'>
				What we offer our clients
			</h2>
			<ul className='flex flex-wrap gap-10 lg:flex-nowrap md:gap-x-2 mt-20 justify-center'>
				<li className='bg-white rounded-xl shadow-lg max-w-[250px] p-5 py-8'>
					<div className='relative'>
						<span className='absolute -top-14 left-[40%]'>
							<img src={icon1} alt='' />
						</span>

						<h4 className='font-bold text-center text-md'>Visa Consultation</h4>
						<p className='text-center text-sm'>
							Our qualified and dependable visa consultants can assist you in
							obtaining a favorable result in your case.
						</p>
					</div>
				</li>
				<li className='bg-white rounded-xl shadow-lg max-w-[250px] p-5 py-8'>
					<div className='relative'>
						<span className='absolute -top-14 left-[40%]'>
							<img src={icon2} alt='' />
						</span>

						<h4 className='font-bold text-center text-md'>Resources</h4>
						<p className='text-center text-sm'>
							We provide our clients with important information and resources
							and also the travel requrements needed.
						</p>
					</div>
				</li>
				<li className='bg-white rounded-xl shadow-lg max-w-[250px] p-5 py-8'>
					<div className='relative'>
						<span className='absolute -top-14 left-[40%]'>
							<img src={icon3} alt='' />
						</span>

						<h4 className='font-bold text-center text-md'>Support</h4>
						<p className='text-center text-sm'>
							We also provide required document support to ease the application
							process.
						</p>
					</div>
				</li>
				<li className='bg-white rounded-xl shadow-lg max-w-[250px] p-5 py-8'>
					<div className='relative'>
						<span className='absolute -top-14 left-[40%]'>
							<img src={icon4} alt='' />
						</span>

						<h4 className='font-bold text-center text-md'>Free Assessment</h4>
						<p className='text-center text-sm'>
							We help those who want to know their eligibility status by
							assisting with free visa assessment.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
