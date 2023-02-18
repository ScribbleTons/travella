import { useState } from 'react';
import leftImage from '../../assets/sign-1.png';
import Input from '../../components/form/input';

function Signin() {
	const [count, setCount] = useState(0);

	return (
		<section className='flex'>
			<div className='relative h-screen hidden lg:block lg:max-w-2/5'>
				<img src={leftImage} width={400} />
			</div>
			<div>
				<div>
					<h2>Welcome back!</h2>
					<p>We&apos;re always excited to have you back.</p>
				</div>

				<div>
					<Input type='email' />
					<Input type='password' />
				</div>
			</div>
		</section>
	);
}

export default Signin;
