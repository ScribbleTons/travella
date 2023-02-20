import Footer from './footer';
import Header from './header';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main className='min-h-screen'>{children}</main>
			<Footer />
		</>
	);
};

export default HomeLayout;
