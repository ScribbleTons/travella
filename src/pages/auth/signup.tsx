import Checkbox from '../../components/form/checkbox';
import Input from '../../components/form/input';
import Button from '../../components/button';
import leftImage from '../../assets/sign.png';
import logo from '../../assets/logo-rec.png';
import googleImage from '../../assets/google.svg';
import { Link, useNavigate } from '@tanstack/react-location';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from '../../components/form/phoneInput';
import toast from 'react-hot-toast';
import { useState } from 'react';

const schema = yup.object({
	email: yup
		.string()
		.email()
		.lowercase()
		.trim()
		.required('Enter email address'),
	password: yup.string().min(5).required('Enter password'),
	confirmPassword: yup
		.string()
		.equals([yup.ref('password')], 'Both passwords have to be the same'),
	agreedWithTerms: yup.boolean(),
	countryCode: yup.string().default('+234'),
	firstname: yup.string().required('Enter your first name'),
	lastname: yup.string().required('Enter your last name'),
	phone: yup.string().notRequired(),
});

function Signup() {
	const [isLoading, setIsLoading] = useState(false);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();
	const onSubmit = (values: any) => {
		if (!values.agreedWithTerms) {
			return toast.error('Please accept the terms to continue!', {
				id: 'error',
			});
		}

		setIsLoading(true);

		toast.success('Sign up completed!');
		setIsLoading(false);

		setTimeout(() => {
			navigate({ to: '/signup' });
		}, 3000);
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
			<div className='w-full sm:w-[80%] md:w-3/4 lg:w-3/5 px-6 md:px-5 lg:px-10 my-20 md:my-0'>
				<div className='mt-20 mb-10'>
					<h2 className='font-extrabold text-brand-text-600 text-3xl antialiased'>
						Welcome!
					</h2>
					<p className='mt-2 text-md text-brand-text-200'>
						This will only take a minute!
					</p>

					<p className='mt-4'>
						Sign up as an agent instead?{' '}
						<Link to='/'>
							<span className='highlighted'>Sign up as agent</span>
						</Link>
					</p>
				</div>

				<form
					className=' md:grid gap-x-10 gap-y-3 md:grid-cols-2'
					onSubmit={handleSubmit(onSubmit)}>
					<Input
						label='First Name'
						type='text'
						required
						error={errors.firstname}
						register={{ ...register('firstname') }}
					/>
					<Input
						label='Last Name'
						type='text'
						required
						error={errors.lastname}
						register={{ ...register('lastname') }}
					/>
					<Input
						label='Email address'
						type='email'
						required
						error={errors.email}
						register={{ ...register('email') }}
						rightElement={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6'>
								<path
									fillRule='evenodd'
									d='M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
									clipRule='evenodd'
								/>
							</svg>
						}
					/>
					<PhoneInput
						countryCodeElement={
							<select
								defaultValue='+234'
								{...register('countryCode')}
								className='focus:outline-none border-none appearance-none bg-transparent absolute top-1 left-1 h-4/5'>
								<option value='+234'>🇳🇬</option>
								<option value='+1'>🇺🇸</option>
							</select>
						}
						error={errors.phone}
						register={{ ...register('phone', { deps: ['countryCode'] }) }}
					/>
					<Input
						label='Password'
						type='password'
						required
						error={errors.password}
						register={{ ...register('password') }}
					/>
					<Input
						label='Confirm Password'
						type='password'
						required
						error={errors.confirmPassword}
						register={{ ...register('confirmPassword') }}
					/>

					<div className='col-span-2 grid md:block'>
						<Checkbox
							label={
								<span>
									I agree to the{' '}
									<span className='highlighted'>terms and conditions</span>
								</span>
							}
							register={{ ...register('agreedWithTerms') }}
						/>
						<div className='flex gap-5 items-center my-6 order-2'>
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
						<p className='text-center text-sm order-3'>
							Don&apos;t have an account?{' '}
							<Link to='/signin'>
								<span className='highlighted'>Sign In</span>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Signup;
