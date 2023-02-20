import dest from '../../assets/dest.png';
export default function TopDestinations() {
	const destinations = [
		{ img: '', name: 'Kenya (E-visa)' },
		{ img: '', name: 'United Arab Emirates' },
		{ img: '', name: 'Nigeria (visa on arrival)' },
		{ img: '', name: 'Egypt' },
	];
	return (
		<section>
			<h2 className='font-extrabold text-2xl text-secondary-600 text-center '>
				Top <span className='highlighted'>Destinations</span>
			</h2>

			<ul className='flex flex-wrap items-center justify-center gap-4 my-12 px-6'>
				{destinations.map((des, i) => (
					<li
						key={i}
						className='max-w-[300px] max-h-[300px] rounded-2xl overflow-hidden shadow-md group/list'>
						<img src={dest} alt='' />
						<p className='group-odd/list:bg-primary-600 group-even/list:bg-secondary-600 text-white p-2 text-center truncate'>
							{des.name}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
