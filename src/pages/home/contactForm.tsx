import v1 from '../../assets/v-1.png';
import Button from '../../components/button';

export default function ContactForm() {
	return (
		<section className='px-6'>
			<h3 className='font-extrabold text-2xl text-secondary-600 text-center'>
				Get free assessment today
			</h3>

			<div
				className='my-6 pb-5'
				style={{
					backgroundImage: `url(${v1})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					minHeight: 400,
				}}>
				<p className='text-primary-600 text-center'>
					Feel free to enquire about any questions you have
				</p>

				<form className='flex flex-col items-center mx-auto gap-2 my-4 md:w-2/3 lg:w-2/5'>
					<input
						type='text'
						placeholder='Full name'
						className='w-full rounded-lg focus:border-primary-600 focus:ring-0  focus:outline-none shadow-sm border-transparent'
					/>
					<input
						type='email'
						placeholder='Email Address'
						className='w-full rounded-lg focus:border-primary-600 focus:ring-0  focus:outline-none shadow-sm border-transparent'
					/>
					<textarea
						className='w-full rounded-lg resize-none focus:border-primary-600 focus:ring-0  focus:outline-none shadow-sm border-transparent mb-4'
						placeholder='Type message here'
						cols={30}
						rows={5}></textarea>
					<Button title='Send' />
				</form>
			</div>
		</section>
	);
}
