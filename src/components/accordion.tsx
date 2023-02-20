import { useState } from 'react';

const Accordion = ({
	items,
	className,
}: {
	items: Array<{ title: string; content: string }>;
	className?: string;
}) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<div className={` ${className}`}>
			{items.map((item, i) => (
                <AccordionItem
                    key={i}
					active={i === selectedIndex}
					toggle={() => setSelectedIndex(i)}
					title={item.title}
					content={item.content}
				/>
			))}
		</div>
	);
};

const AccordionItem = ({
	title,
	content,
	active = false,
	toggle,
}: {
	title: string;
	content: string;
	active: boolean;
	toggle: () => void;
}) => {
	return (
		<div className='border-b w-full'>
			<button
				onClick={toggle}
				className='w-full flex items-center justify-between py-4 px-2 lg:px-10 text-secondary-600 font-semibold text-xl'>
				<span className='w-3/4 text-left'>{title}</span>
				{!active ? <IconSVGOpen /> : <IconSVGClose />}
			</button>
			<p
				className={`${
					active ? 'block' : 'hidden'
				} px-2 lg:px-10 transition-all duration-500 text-brand-text-200 text-sm w-full lg:w-2/3 pb-4`}>
				{content}
			</p>
		</div>
	);
};

const IconSVGClose = () => (
	<svg
		width='28'
		height='28'
		viewBox='0 0 28 28'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<circle
			cx='14'
			cy='14'
			r='13.25'
			fill='#D19439'
			fillOpacity='0.4'
			stroke='#D19439'
			strokeWidth='1.5'
		/>
		<g clipPath='url(#clip0_1_1950)'>
			<path
				d='M19.0416 14.2916H7.95825V12.7083H19.0416V14.2916Z'
				fill='#323232'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_1950'>
				<rect width='19' height='19' fill='white' transform='translate(4 4)' />
			</clipPath>
		</defs>
	</svg>
);

const IconSVGOpen = () => (
	<svg
		width='28'
		height='28'
		viewBox='0 0 28 28'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<circle
			cx='14'
			cy='14'
			r='13.25'
			fill='#D19439'
			fillOpacity='0.4'
			stroke='#D19439'
			strokeWidth='1.5'
		/>
		<g clipPath='url(#clip0_1_1962)'>
			<path
				d='M19.8334 14.8334H14.8334V19.8334H13.1667V14.8334H8.16675V13.1667H13.1667V8.16675H14.8334V13.1667H19.8334V14.8334Z'
				fill='#323232'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_1962'>
				<rect width='20' height='20' fill='white' transform='translate(4 4)' />
			</clipPath>
		</defs>
	</svg>
);

export default Accordion;
