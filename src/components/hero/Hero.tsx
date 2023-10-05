'use client';

import Image from 'next/image';
import { Button } from '..';

const Hero = () => {
	const handleClick = () => {};
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					Find, book or rent a car -- quickly and easily
				</h1>
				<p className='hero__subtitle'>
					Streamline your car rental experience with out effortless booking
					process
				</p>
				<Button
					title='Explore cars'
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					handleClick={handleClick}
				/>
			</div>
			<div className='hero__image-container overflow-hidden'>
				<div className='hero__image'>
					<Image
						src='/hero.png'
						fill
						alt='hero car image'
						className='object-contain'
					/>
				</div>
				<div className='hero__image-overlay' />
			</div>
		</div>
	);
};

export default Hero;
