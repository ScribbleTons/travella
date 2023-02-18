import { FC, ReactElement } from 'react';

type Props = {
	label?: string | ReactElement;
	register?: Record<string, string | any>;
};

const Checkbox: FC<Props> = ({ label, register }) => {
	return (
		<div className='flex items-center mb-4'>
			<input
				{...register}
				id='checkbox'
				type='checkbox'
				className='w-4 h-4 text-primary-600 
				bg-gray-100 border-gray-300 rounded focus:ring-primary-200 
				 '
			/>
			<label
				htmlFor='checkbox'
				className='ml-2 text-sm font-normal text-gray-900 dark:text-gray-300'>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
