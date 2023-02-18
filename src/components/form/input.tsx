import { FC, ReactElement, useId, useState } from 'react';

interface InputProps {
	type?: 'password' | 'tel' | 'text' | 'email';
	placeholder?: string;
	register?: Record<string, string | any>;
	label?: string;
	error?: any;
	required?: boolean;
	rightElement?: ReactElement;
	leftElement?: ReactElement;
}

const Input: FC<InputProps> = ({
	type = 'text',
	placeholder = '   ',
	register,
	label,
	error,
	required,
	rightElement,
	leftElement
}) => {
	const [show, setShow] = useState(false);
	const id = useId();

	const showPasswordEl = () => (
		<>
			{!show ? (
				<svg
					role='button'
					tabIndex={-2}
					onClick={() => setShow((s) => !s)}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6 focus:outline-none'>
					<path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
					<path
						fillRule='evenodd'
						d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
						clipRule='evenodd'
					/>
				</svg>
			) : (
				<svg
					role='button'
					tabIndex={-2}
					onClick={() => setShow((s) => !s)}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6 focus:outline-none'>
					<path d='M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z' />
					<path d='M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z' />
					<path d='M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z' />
				</svg>
			)}
		</>
	);
	return (
		<div className='mb-3'>
			<div className='relative '>
				<input
					autoComplete='none'
					{...register}
					type={show ? 'text' : type}
					placeholder={placeholder}
					id={id}
					aria-invalid={error}
					className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 
					 rounded-lg border-1 border-primary-200 
					 appearance-none dark:text-white bg-primary-100
					 focus:outline-none  focus:bg-transparent autofill:bg-white
					 focus:ring-0 focus:border-primary-600 peer'
				/>
				<span className='absolute top-3 right-4 text-gray-400'>
					{rightElement && type !== 'password' && rightElement}
					{type === 'password' && showPasswordEl()}
				</span>
				<label
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
				</label>
			</div>
			{error && (
				<p id={`${id}_help`} className='mt-1 mb-2 text-xs text-red-600'>
					{error?.message}
				</p>
			)}
		</div>
	);
};

export default Input;
