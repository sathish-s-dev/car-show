'use client';

import { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import Image from 'next/image';
import { getImageUrl } from '@/utils';

export function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
	const { make, model } = car;
	return (
		<>
			<Transition
				as={Fragment}
				appear
				show={isOpen}>
				<Dialog
					as={'div'}
					className={'relative, z-10'}
					onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-300'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'>
								<Dialog.Panel className='relative w-full max-w-md max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left transition-all flex flex-col gap-5'>
									<button
										title='close'
										type='button'
										className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
										onClick={closeModal}>
										<Image
											src={'/close.svg'}
											width={20}
											height={20}
											alt='close'
											className='object-contain'
										/>
									</button>
									<div className=''>
										<div className='flex justify-center items-center bg-pattern p-3'>
											<Image
												src={getImageUrl(car)}
												alt='car-image'
												width={200}
												height={100}
												priority
											/>
										</div>
										<div className='flex gap-4 py-4'>
										<div className='flex-1 h-24 cursor-pointer w-full relative'>
												<Image
													src={getImageUrl(car, '29')}
													alt='car-image'
													fill
													priority
													className='object-contain'
												/>
											</div>
											<div className='flex-1 h-24 cursor-pointer w-full relative'>
												<Image
													src={getImageUrl(car, '35')}
													alt='car-image'
													fill
													priority
													className='object-contain'
												/>
											</div>
											
											<div className='flex-1 cursor-pointer h-24 w-full relative'>
												<Image
													src={getImageUrl(car, '13')}
													alt='car-image'
													fill
													priority
													className='object-contain'
												/>
											</div>
										</div>
										<div className=''>
											<h3 className='text-lg uppercase font-bold mb-2'>
												{make} {model}
											</h3>
											<div className='flex flex-col gap-1'>
												{Object.entries(car).map(([key, value]) => (
													<div className='flex justify-between'>
														<span className='text-gray-400 uppercase text-sm'>
															{key.split('_').join(' ')}
														</span>
														<span className='font-semibold capitalize'>
															{value}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
