'use client';

import Image from 'next/image';
import { calculateCarRent, getImageUrl } from '@/utils';
import { Button, CarDetails } from '..';

import { Fragment, useState } from 'react';

export function CarCard({ car }: { car: Car }) {
	const { city_mpg, year, make, model, transmission, drive } = car;
	const carRent = calculateCarRent(city_mpg, year);

	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className='car-card group'
			key={car.model}>
			<div className='car-card__content'>
				<h2 className='car-card__content-title'>
					{make} {model}
				</h2>
			</div>
			<p className='flex mt-6 text-[32px] font-extrabold'>
				<span className='self-start text-[14px] font-normal'>$</span>
				{carRent}
				<span className='self-end text-[14px] font-normal'>/day</span>
			</p>
			<div className='relative w-full h-40 my-3 object-contain'>
				<Image
					src={getImageUrl(car, '8')}
					alt='car model'
					fill
					priority
					className='object-contain'
				/>
			</div>
			<div className='relative flex w-full mt-2'>
				<div className='flex group-hover:invisible w-full justify-between text-gray'>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Image
							src={'/steering-wheel.svg'}
							width={20}
							height={20}
							alt='steering wheel'
						/>
						<p className='text-[14px]'>
							{transmission === 'a' ? 'Automatic' : 'Manual'}
						</p>
					</div>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Image
							src={'/tire.svg'}
							width={20}
							height={20}
							alt='steering wheel'
						/>
						<p className='text-[14px]'>{drive.toUpperCase()}</p>
					</div>
					<div className='flex flex-col justify-center items-center gap-2'>
						<Image
							src={'/gas.svg'}
							width={20}
							height={20}
							alt='steering wheel'
						/>
						<p className='text-[14px]'>{city_mpg} MPG</p>
					</div>
				</div>
				<div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
					<Button
						containerStyles={'w-full bg-primary-blue  rounded-full'}
						textStyles='text-slate-50 text-[14px] leading-[17px] font-bold'
						handleClick={() => setIsOpen(true)}
						title='View More'
						icon='/right-arrow.svg'
					/>
				</div>
			</div>
			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	);
}
