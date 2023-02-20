import { FC, ReactElement } from 'react';

type Props = {
	label?: string | ReactElement;
	register?: Record<string, string | any>;
	error?: any;
};

const Checkbox: FC<Props> = ({ label, register, error }) => {
	return (
		<div>
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
			{error && (
				<p className='mt-1 mb-2 text-xs text-red-600'>{error?.message}</p>
			)}
		</div>
	);
};

export default Checkbox;
