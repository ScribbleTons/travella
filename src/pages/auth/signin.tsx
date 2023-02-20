import leftImage from '../../assets/sign.png';
import logo from '../../assets/logo-rec.png';
import Checkbox from '../../components/form/checkbox';
import Input from '../../components/form/input';
import Button from '../../components/button';
import googleImage from '../../assets/google.svg';
import { Link, useNavigate } from '@tanstack/react-location';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../../../hooks/useAuthUser';

const schema = yup.object({
	email: yup
		.string()
		.email()
		.lowercase()
		.trim()
		.required('Enter email address'),
	password: yup.string().min(5).required('Enter password'),
	keepSignedIn: yup.boolean().default(false),
});

function Signin() {
	const [isLoading, setIsLoading] = useState(false);
	const { signin } = useAuthContext();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();

	//API given is directed to localhost, hence this implementation

	const onSubmit = (values: any) => {
		setIsLoading(true);

		signin(values)
			.then(() => {
				setIsLoading(false);
				navigate({ to: '/' });
			})
			.catch(() => {
				toast.error('An error occured!', {
					id: 'error',
				});
			});
	};

	return (
		<section className='relative min-h-screen flex md:flex-row items-center md:items-start justify-center md:justify-start'>
			<Link to='/'>
				<div className='absolute top-10 left-0 z-20'>
					<img src={logo} width={200} className='h-full block' />
				</div>
			</Link>
			<div className='relative h-screen hidden md:block md:w-1/3 lg:max-w-2/5'>
				<img src={leftImage} width={400} className='h-full block' />
			</div>
			<div className='w-full sm:w-[80%] md:w-3/4 lg:w-2/5 px-6 md:px-5 lg:px-10 self-center'>
				<div className='mt-20 mb-10'>
					<h2 className='font-extrabold text-brand-text-600 text-3xl antialiased'>
						Welcome back!
					</h2>
					<p className='mt-2 text-md text-brand-text-200'>
						We&apos;re always excited to have you back.
					</p>
				</div>

				<form className='' onSubmit={handleSubmit(onSubmit)}>
					<Input
						label='Email address'
						type='email'
						required
						error={errors.email}
						register={{ ...register('email') }}
					/>
					<Input
						label='Password'
						type='password'
						required
						error={errors.password}
						register={{ ...register('password') }}
					/>
					<Checkbox
						label='Keep me signed in'
						register={{ ...register('keepSignedIn') }}
					/>

					<div className='flex gap-5 items-center my-6'>
						<Button
							title='Sign In'
							isLoading={isLoading}
							disabled={isLoading}
						/>
						<span className='text-gray-400 text-sm'>or sign in with</span>
						<button type='button' className='shadow-lg rounded-md'>
							<img src={googleImage} alt='' />
						</button>
					</div>
					<p className='text-center text-sm'>
						Don&apos;t have an account?{' '}
						<Link to='/signup'>
							<span className='highlighted'>Sign Up</span>
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}

export default Signin;
