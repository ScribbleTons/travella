import icon1 from '../../assets/test.png';
export default function Testimonials() {
	const tests = Array(3).fill(null);
	return (
		<section className='relative'>
			<svg
				className='absolute -top-40 right-0 -z-10'
				width='103'
				height='222'
				viewBox='0 0 103 222'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g opacity='0.8'>
					<circle
						opacity='0.2'
						cx='111'
						cy='111'
						r='111'
						fill='#927628'
						fillOpacity='0.6'
					/>
					<circle cx='111' cy='111' r='82' fill='#F5F5F5' />
				</g>
			</svg>
			<svg
				className='absolute -bottom-40 left-0 -scale-x-100 -z-10'
				width='103'
				height='222'
				viewBox='0 0 103 222'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g opacity='0.8'>
					<circle
						opacity='0.2'
						cx='111'
						cy='111'
						r='111'
						fill='#927628'
						fillOpacity='0.6'
					/>
					<circle cx='111' cy='111' r='82' fill='#F5F5F5' />
				</g>
			</svg>
			<h2 className='font-bold text-2xl text-secondary-600 text-center'>
				What <span className='highlighted'>our clients</span> have to say?
			</h2>

			<ul className='flex flex-wrap items-center gap-10 lg:gap-4 justify-center my-14'>
				{tests.map((_, i) => (
					<li
						key={i}
						className='bg-white rounded-xl shadow-lg max-w-[300px] p-5 py-8 even:shadow-2xl even:scale-105'>
						<div className='relative'>
							<span className='absolute -top-14 left-[40%]'>
								<img src={icon1} alt='' width={60} height={60} />
							</span>

							<p className='font-semibold text-center text-xs text-brand-text-600 pt-4'>
								Mr Leke
							</p>
							<div className='flex'>
								<svg
									className='self-start w-[100px]'
									width='35'
									height='51'
									viewBox='0 0 35 51'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M2.54926 14.75C2.54926 9.05667 5.20926 4.32 10.5293 0.539998L15.0093 4.18C13.8426 4.78666 12.6526 5.74333 11.4393 7.05C10.2259 8.35666 9.45592 9.61666 9.12926 10.83C9.68926 10.69 10.2259 10.62 10.7393 10.62C12.2326 10.62 13.4926 11.1567 14.5193 12.23C15.5926 13.3033 16.1293 14.68 16.1293 16.36C16.1293 18.1333 15.4993 19.6733 14.2393 20.98C12.9793 22.24 11.4626 22.87 9.68926 22.87C7.72926 22.87 6.04926 22.1467 4.64926 20.7C3.24926 19.2067 2.54926 17.2233 2.54926 14.75ZM18.2993 14.75C18.2993 9.05667 20.9593 4.32 26.2793 0.539998L30.7593 4.18C29.5926 4.74 28.4026 5.69666 27.1893 7.05C26.0226 8.35666 25.2526 9.61666 24.8793 10.83C25.4393 10.69 25.9759 10.62 26.4893 10.62C28.0293 10.62 29.3126 11.1567 30.3393 12.23C31.3659 13.3033 31.8793 14.68 31.8793 16.36C31.8793 18.1333 31.2493 19.6733 29.9893 20.98C28.7293 22.24 27.2359 22.87 25.5093 22.87C23.5493 22.87 21.8459 22.1467 20.3993 20.7C18.9993 19.2067 18.2993 17.2233 18.2993 14.75Z'
										fill='#222222'
									/>
								</svg>
								<p className='text-center text-sm'>
									Our qualified and dependable visa consultants can assist you
									in obtaining a favorable result in your case.
								</p>
								<svg
									className='self-end w-[100px]'
									width='35'
									height='51'
									viewBox='0 0 35 51'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M32.4507 36.25C32.4507 41.9433 29.7907 46.68 24.4707 50.46L19.9907 46.82C21.1574 46.2133 22.3474 45.2567 23.5607 43.95C24.7741 42.6433 25.5441 41.3833 25.8707 40.17C25.3107 40.31 24.7741 40.38 24.2607 40.38C22.7674 40.38 21.5074 39.8433 20.4807 38.77C19.4074 37.6967 18.8707 36.32 18.8707 34.64C18.8707 32.8667 19.5007 31.3267 20.7607 30.02C22.0207 28.76 23.5374 28.13 25.3107 28.13C27.2707 28.13 28.9507 28.8533 30.3507 30.3C31.7507 31.7933 32.4507 33.7767 32.4507 36.25ZM16.7007 36.25C16.7007 41.9433 14.0407 46.68 8.72074 50.46L4.24074 46.82C5.40741 46.26 6.59741 45.3033 7.81074 43.95C8.97741 42.6433 9.74741 41.3833 10.1207 40.17C9.56074 40.31 9.02407 40.38 8.51074 40.38C6.97074 40.38 5.68741 39.8433 4.66074 38.77C3.63407 37.6967 3.12074 36.32 3.12074 34.64C3.12074 32.8667 3.75074 31.3267 5.01074 30.02C6.27074 28.76 7.76407 28.13 9.49074 28.13C11.4507 28.13 13.1541 28.8533 14.6007 30.3C16.0007 31.7933 16.7007 33.7767 16.7007 36.25Z'
										fill='#222222'
									/>
								</svg>
							</div>
						</div>
						<div className='flex items-center justify-center my-2'>
							{Array(5)
								.fill(null)
								.map((_, i) => (
									<svg
										key={i}
										aria-hidden='true'
										className='w-5 h-5 text-yellow-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<title>First star</title>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
									</svg>
								))}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
