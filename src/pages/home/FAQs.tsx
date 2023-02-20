import Accordion from '../../components/accordion';


const faqs = [
	{
		title: 'What are the requirements to get a visa?',
		content:
			'The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.',
	},
	{
		title: 'What are the requirements to get a visa?',
		content:
			'The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.',
	},
	{
		title: 'What are the requirements to get a visa?',
		content:
			'The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.',
	},
	{
		title: 'What are the requirements to get a visa?',
		content:
			'The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.',
	},
	{
		title: 'What are the requirements to get a visa?',
		content:
			'The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.',
	},
];
export default function FAQs() {
    
	return (
		<section className='mt-10'>
			<h2 className='font-extrabold text-2xl text-secondary-600 text-center'>
				Frequently asked <span className='highlighted'>questions</span>
			</h2>
			<div className='w-full md:w-3/4 lg:w-3/5 my-14 mx-auto px-4'>
				<Accordion items={faqs} className="bg-white rounded-lg shadow-md py-10 px-4" />
			</div>
		</section>
	);
}
