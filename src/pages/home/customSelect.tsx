import { format } from 'date-fns';
import { ChangeEvent, FC, ReactElement, useRef, useState } from 'react';

interface Props {
	onChange?: (e: ChangeEvent) => void;
	value?: string;
	options: Array<{ value: string; label: String | ReactElement }>;
	title?: string;
	defaultValue?: string;
}

export const CustomSelect: FC<Props> = ({
	onChange,
	value,
	options,
	title,
	defaultValue,
}) => {
	return (
		<div className='rounded-xl bg-white border border-gray-400 p-4 scale-75 md:scale-100 transition-all duration-75 ease-in-out'>
			<p className='text-brand-text-200'>{title}</p>

			<select
				defaultValue={defaultValue}
				onChange={onChange}
				value={value}
				className='pl-0 text-secondary-600 font-semibold focus:ring-transparent focus:outline-none border-none'>
				{options.map((option, i) => (
					<option key={i} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export const CustomDatePicker: FC<Pick<Props, 'onChange' | 'title'>> = ({
	onChange,
	title,
}) => {
	const dateRef = useRef<HTMLInputElement>(null);
	const [date, setDate] = useState(new Date());

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate(new Date(e.target.value));
		onChange && onChange(e);
	};
	return (
		<div className='rounded-xl bg-white border border-gray-400 p-4 min-w-[180px] scale-75 md:scale-100 transition-all duration-75 ease-in-out'>
			<p className='text-brand-text-200'>{title}</p>
			<span
				onClick={() => dateRef.current?.showPicker()}
				className='flex w-fill justify-between pl-0 items-center text-secondary-600 
                font-semibold focus:ring-transparent
                focus:outline-none border-none'>
				<input
					ref={dateRef}
					onChange={handleChange}
					value={date.toString()}
					className='absolute invisible'
					type='date'
				/>
				{format(date, 'do MMM yyyy')}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-4 h-4 ml-3 text-semibold'>
					<path
						fillRule='evenodd'
						d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
						clipRule='evenodd'
					/>
				</svg>
			</span>
			<p className='capitalize text-brand-text-200'>{format(date, 'eeee')}</p>
		</div>
	);
};
