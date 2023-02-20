import hero from '../../assets/hero.png';
import { CustomDatePicker, CustomSelect } from './customSelect';
export default function HeroSection() {
	return (
		<section
			className='relative pt-20 pb-10 px-4 md:px-6 lg:px-10 flex flex-col 
			items-center justify-center mb-64 md:mb-20 bg-black'
			style={{
				backgroundImage: `url(${hero})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundColor:"#202020",
				minHeight: 600,
			}}>
			<div>
				<h1 className='font-bold text-4xl text-white max-w-[500px] mb-6'>
					PROMPT AND EASY STEPS FOR VISA PROCESSING
				</h1>
				<div className='py-6 px-4 lg:px-10 rounded-3xl shadow-md backdrop-blur-xl m-auto flex flex-col items-center gap-y-4'>
					<div className='grid px-3 gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center justify-between'>
						<div className='flex gap-5 w-fit relative md:scale-90 lg:scale-100'>
							<CustomSelect
								title='Travelling from?'
								options={[{ value: 'Lagos, Nigeria', label: 'Lagos, Nigeria' }]}
							/>
							<CustomSelect
								title='Travelling to?'
								options={[{ value: 'Lagos, Nigeria', label: 'Nairobi, Kenya' }]}
							/>
							<svg
								className='absolute top-[28%] left-[42%]'
								width='53'
								height='53'
								viewBox='0 0 53 53'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle cx='26.5' cy='26.5' r='26.5' fill='#757575' />
								<g clipPath='url(#clip0_1_1883)'>
									<rect
										width='24'
										height='24'
										transform='translate(14 14)'
										fill='#757575'
									/>
									<path d='M36 22L32 18V21H17V23H32V26L36 22Z' fill='#F5F5F5' />
									<path d='M16 30L20 34V31H35V29H20V26L16 30Z' fill='#F5F5F5' />
								</g>
								<defs>
									<clipPath id='clip0_1_1883'>
										<rect
											width='24'
											height='24'
											fill='white'
											transform='translate(14 14)'
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className='flex gap-4 w-fit md:scale-90 lg:scale-100'>
							<CustomDatePicker title='Departure date' />
							<CustomDatePicker title='Return date' />
						</div>
						<div className='flex gap-4 w-fit md:col-span-2 xl:col-span-1 md:scale-90 lg:scale-100'>
							<CustomSelect
								title='Travellers/ Class'
								options={[{ value: 'Lagos, Nigeria', label: 'Lagos, Nigeria' }]}
							/>
							<CustomSelect
								title='Visa type'
								options={[{ value: 'Lagos, Nigeria', label: 'Lagos, Nigeria' }]}
							/>
						</div>
					</div>
					<button className='active:scale-95 hover:sepia'>
						<svg
							className=''
							width='73'
							height='73'
							viewBox='0 0 73 73'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle cx='36.5' cy='36.5' r='36.5' fill='#162E40' />
							<g clipPath='url(#clip0_1_1921)'>
								<rect
									width='30'
									height='30'
									transform='matrix(-1 0 0 1 51 21)'
									fill='#162E40'
								/>
								<path
									d='M24.75 34.75H42.4625L37.9875 30.2625L39.75 28.5L47.25 36L39.75 43.5L37.9875 41.7375L42.4625 37.25H24.75V34.75Z'
									fill='#F5F5F5'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_1921'>
									<rect
										width='30'
										height='30'
										fill='white'
										transform='matrix(-1 0 0 1 51 21)'
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>
			</div>

			<div className='absolute -bottom-64 md:-bottom-20 bg-primary-600 rounded-3xl flex flex-col md:flex-row gap-3 px-12 py-8 hover:scale-105 transition-all duration-150'>
				<div className='border-b md:border-b-0 md:border-r pb-4 md:pb-0 border-gray-300 text-center px-4'>
					<h3 className='text-2xl text-white font-bold'>200</h3>
					<p className='text-white text-sm'>clients who have trusted us</p>
				</div>
				<div className='border-b md:border-b-0 md:border-r pb-4 md:pb-0 border-gray-300 text-center px-4'>
					<h3 className='text-2xl text-white font-bold'>98%</h3>
					<p className='text-white text-sm'>Successful visa process rate</p>
				</div>
				<div className='text-center px-4'>
					<h3 className='text-2xl text-white font-bold'>60 hrs</h3>
					<p className='text-white text-sm'>Application approval time</p>
				</div>
			</div>
		</section>
	);
}
