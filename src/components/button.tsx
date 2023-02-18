import { FC } from 'react';

interface ButtonProps {
	variant?: 'primary' | 'default';
	isLoading?: boolean;
	loadingText?: string;
	title: string;
	type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({
	loadingText,
	isLoading,
	title,
	type = 'submit',
}) => {
	return (
		<button
			type={type}
			className='active:scale-95 text-white bg-primary-600 hover:bg-primary-700 
                focus:outline-none focus:ring-2 focus:ring-primary-100
                font-medium rounded-lg text-sm px-6 py-2.5 text-center
                mr-2 mb-2'>
			{title}
		</button>
	);
};

export default Button;
