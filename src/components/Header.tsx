import Image from 'next/image';
import { Button } from '.';

const Header = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav className=' max-w-[1440px] flex justify-between items-center py-6 px-6 md:px-16 mx-auto'>
				<Image
					src={'/logo.svg'}
					alt='logo'
					width={118}
					height={18}
				/>
				<Button
					title='sign in'
					containerStyles='rounded-full bg-white text-primary-blue min-w-[130px]'
				/>
			</nav>
		</header>
	);
};

export default Header;
