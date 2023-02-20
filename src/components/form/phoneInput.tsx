import { FC, ReactElement, useId, useState } from 'react';

interface PhoneInputProps {
	register?: Record<string, string | any>;
	countryCodeElement: ReactElement;
	error?: any;
}

const PhoneInput: FC<PhoneInputProps> = ({
	register,
	error,
	countryCodeElement,
}) => {
	const id = useId();

	return (
		<div className='mb-3'>
			<div className='relative flex '>
				{countryCodeElement}
				<input
					autoComplete='phone-pad'
					{...register}
					type={'tel'}
					placeholder='10 digits phone number'
					id={id}
					aria-invalid={error}
					className='block pl-20 pr-2.5 py-2.5 pt-3 w-full text-sm text-gray-900 
					 rounded-lg border-1 border-primary-200 
					 appearance-none dark:text-white bg-primary-100
					 focus:outline-none  focus:bg-transparent autofill:bg-white
					 focus:ring-0 focus:border-primary-600 peer'
				/>
			</div>
			{error && (
				<p id={`${id}_help`} className='mt-1 mb-2 text-xs text-red-600'>
					{error?.message}
				</p>
			)}
		</div>
	);
};

export default PhoneInput;
