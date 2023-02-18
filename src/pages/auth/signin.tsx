import leftImage from '../../assets/sign-1.png';
import Checkbox from '../../components/form/checkbox';
import Input from '../../components/form/input';
import Button from '../../components/button';
import googleImage from '../../assets/google.svg';
import { Link } from '@tanstack/react-location';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<section className='flex flex-col md:flex-row items-center'>
			<div className='relative h-screen hidden md:block lg:max-w-2/5'>
				<img src={leftImage} width={400} className='h-full block' />
			</div>
			<div className='md:w-2/5 md:px-5 lg:px-10'>
				<div className='mt-20 mb-10'>
					<h2 className='font-extrabold text-brand-text-600 text-3xl antialiased'>
						Welcome back!
					</h2>
					<p className='mt-2 text-md text-brand-text-200'>
						We&apos;re always excited to have you back.
					</p>
				</div>

				<form
					className=''
					onSubmit={handleSubmit(onSubmit)}>
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
						<Button title='Sign In' />
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
