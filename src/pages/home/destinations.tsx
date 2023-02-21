import dest1 from '../../assets/dest-1.png';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useMediaQuery from '../../../hooks/useMediaQuery';

const destinations = [
	{ img: '', name: 'Kenya (E-visa)' },
	{ img: '', name: 'United Arab Emirates' },
	{ img: '', name: 'Nigeria (visa on arrival)' },
	{ img: '', name: 'Egypt' },
	{ img: '', name: 'Kenya (E-visa)' },
	{ img: '', name: 'United Arab Emirates' },
	{ img: '', name: 'Nigeria (visa on arrival)' },
	{ img: '', name: 'Egypt' },
];

export default function Destinations() {
	const { width } = useMediaQuery();

	function visibleSlides() {
		if (width < 600) return 1;
		if (width > 600 && width < 800) return 2;
		if (width > 800 && width < 1200) return 3;
		return 5;
	}
	return (
		<section className='pb-40'>
			<h2 className='font-extrabold text-2xl text-secondary-600 text-center'>
				Popular destinations
			</h2>
			<p className='text-center text-sm p-6 bg-[#FFF3D199] my-4'>
				Tourist visa only
			</p>

			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={125}
				isIntrinsicHeight
				isPlaying
				visibleSlides={visibleSlides()}
				step={1}
				lockOnWindowScroll
				totalSlides={destinations.length}
				className='px-4 lg:px-20'>
				<div className='flex items-center justify-center gap-4'>
					<ButtonBack>
						<svg
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g filter='url(#filter0_b_1_1974)'>
								<circle
									cx='14'
									cy='14'
									r='13.25'
									transform='matrix(-1 0 0 1 28 0)'
									fill='#BDBDBD'
									stroke='#BDBDBD'
									strokeWidth='1.5'
								/>
								<path
									d='M10.5 14L15 9.23686L15 18.7631L10.5 14Z'
									fill='#F5F5F5'
								/>
							</g>
							<defs>
								<filter
									id='filter0_b_1_1974'
									x='-10'
									y='-10'
									width='48'
									height='48'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'>
									<feFlood floodOpacity='0' result='BackgroundImageFix' />
									<feGaussianBlur in='BackgroundImageFix' stdDeviation='5' />
									<feComposite
										in2='SourceAlpha'
										operator='in'
										result='effect1_backgroundBlur_1_1974'
									/>
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='effect1_backgroundBlur_1_1974'
										result='shape'
									/>
								</filter>
							</defs>
						</svg>
					</ButtonBack>
					<Slider className='h-fit'>
						{destinations.map((des, i) => (
							<Slide index={i} key={i} className='max-w-[320px] md:h-[300px] mx-8 lg:mx-12'>
								<div className='md:w-[280px] rounded-2xl overflow-hidden shadow-md'>
									<p className='text-brand-text-600 bg-white p-6 text-center'>
										{des.name}
									</p>
									<div className='max-h-[100px] overflow-hidden'>
										<img src={dest1} alt='' height={200} />
									</div>
									<div className='bg-primary-600 p-4'>
										<p className='text-xs'>Processing time:</p>
										<p className='text-xs'>2-3 working days</p>

										<p className='text-white text-sm'>₦30,000 per person</p>
									</div>
								</div>
							</Slide>
						))}
					</Slider>
					<ButtonNext>
						<svg
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g filter='url(#filter0_b_1_1972)'>
								<circle
									cx='14'
									cy='14'
									r='13.25'
									fill='#BDBDBD'
									stroke='#BDBDBD'
									strokeWidth='1.5'
								/>
								<path
									d='M17.5 14L13 9.23686L13 18.7631L17.5 14Z'
									fill='#F5F5F5'
								/>
							</g>
							<defs>
								<filter
									id='filter0_b_1_1972'
									x='-10'
									y='-10'
									width='48'
									height='48'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'>
									<feFlood floodOpacity='0' result='BackgroundImageFix' />
									<feGaussianBlur in='BackgroundImageFix' stdDeviation='5' />
									<feComposite
										in2='SourceAlpha'
										operator='in'
										result='effect1_backgroundBlur_1_1972'
									/>
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='effect1_backgroundBlur_1_1972'
										result='shape'
									/>
								</filter>
							</defs>
						</svg>
					</ButtonNext>
				</div>
			</CarouselProvider>
		</section>
	);
}
