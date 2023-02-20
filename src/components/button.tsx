import { FC } from 'react';
import Spinner from './spinner';

interface ButtonProps {
	variant?: 'primary' | 'default';
	isLoading?: boolean;
	loadingText?: string;
	title: string;
	type?: 'submit' | 'button';
	spinnerClassName?: string;
	disabled?:boolean
}

const Button: FC<ButtonProps> = ({
	loadingText,
	isLoading,
	title,
	type = 'submit',
	spinnerClassName,
	disabled
}) => {
	return (
		<button
			disabled={disabled}
			type={type}
			className='active:scale-95 text-white bg-primary-600 hover:bg-primary-700 
                focus:outline-none focus:ring-2 focus:ring-primary-100 disabled:active:scale-100
                font-medium rounded-lg text-sm px-6 py-2.5 text-center disabled:bg-yellow-500
                mr-2 mb-2'>
			{isLoading ? <Spinner className={spinnerClassName} /> : title}
		</button>
	);
};

export default Button;
