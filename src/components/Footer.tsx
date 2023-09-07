import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='flex flex-col mt-5 text-gray-800 border-t border-gray-200'>
			<div className='flex max-md:flex-col justify-between flex-wrap gap-5 sm:px-16 px-6 py-10'>
				<div className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-6'>
					<Image
						src='/logo.svg'
						alt='logo'
						width={100}
						height={16}
					/>
					<p className='text-gray-600 text-sm'>
						Carhub 2023
						<br />
						All rights reserved &copy;
					</p>
				</div>
				<div className='flex-1 w-full flex justify-center md:justify-end flex-wrap max-md:mt-10 gap-20'>
					{footerLinks.map((link) => (
						<div
							className='flex flex-col gap-6 text-base min-w-[170px] items-center sm:items-start'
							key={link.title}>
							<h3 className='font-bold'>{link.title}</h3>
							{link.links.map((item) => (
								<Link
									href={item.url}
									key={item.title}>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col sm:flex-row justify-between items-center flex-wrap mt-10 border-t border-gray-200 px-6 md:px-16 text-sm text-gray-500 py-6'>
				<p>@2023 CarHub. All Rights Reserved</p>
				<div className='footer__copyrights-link'>
					<Link
						className='text-gray-500'
						href={'/'}>
						Privacy Policy
					</Link>
					<Link
						className='text-gray-500'
						href={'/'}>
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
