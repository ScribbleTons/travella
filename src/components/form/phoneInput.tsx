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

				{/* <label
					aria-invalid={error}
					aria-required={required}
					htmlFor={id}
					className='absolute text-sm text-brand-text-200 duration-300 
					transform -translate-y-4 scale-75 top-2 backdrop-opacity-60
					z-20 origin-[0] w-4/5 bg-transparent dark:bg-gray-900
					px-2 peer-focus:px-2 peer-placeholder-shown:scale-100
					peer-placeholder-shown:-translate-y-1/2 peer-focus:w-fit
					peer-placeholder-shown:top-1/2 peer-focus:bg-brand-bg
					peer-focus:top-2 peer-focus:scale-75 peer-autofill:w-fit
					peer-focus:-translate-y-4 left-1 peer-autofill:bg-brand-bg
					aria-[required="true"]:after:content-["*"]
					aria-[required="true"]:after:text-red-600
					aria-[required="true"]:after:m-1
					'>
					{label}
				</label> */}
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
