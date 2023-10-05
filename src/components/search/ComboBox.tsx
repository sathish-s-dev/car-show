'use client';

import { Fragment, useState } from 'react';

var { Combobox, Transition } = require('@headlessui/react');

import { manufacturers } from '@/constants';
import Image from 'next/image';

interface ComboBoxProps {
	selected: string;
	setSelected: (selected: string) => void;
}

export default function ComboBox({ selected, setSelected }: ComboBoxProps) {
	const [query, setQuery] = useState('');
	console.log(selected);
	const filteredPeople =
		query === ''
			? manufacturers
			: manufacturers.filter((car) =>
					car
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  );

	return (
		<div className='w-full'>
			<Combobox
				value={selected}
				onChange={setSelected}>
				<div className='relative w-full mt-1'>
					<div className='relative w-full cursor-default overflow-hidden rounded-l-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
						<Combobox.Button className='absolute top-[14px]'>
							<Image
								src={'/car-logo.svg'}
								alt='car logo'
								width={20}
								height={20}
								className='ml-3'
							/>
						</Combobox.Button>
						<Combobox.Input
							className='search-manufacturer__input bg-inherit'
							placeholder='Volkswagen'
							displayValue={(car: string) => car}
							onChange={(event: any) => setQuery(event.target.value)}
						/>
					</div>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}>
						<Combobox.Options className='absolute mt-1 w-full max-h-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{filteredPeople.length === 0 && query !== '' ? (
								<div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
									Nothing found.
								</div>
							) : (
								filteredPeople.map((car) => (
									<Combobox.Option
										key={car}
										className={({
											active,
										}: {
											active: boolean;
										}) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? 'bg-blue-600 text-white' : 'text-gray-900'
										}

              `}
										value={car}>
										{({ selected, active }: any) => (
											<>
												<span
													className={`block truncate ${
														selected ? 'font-medium' : 'font-normal'
													}`}>
													{car}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? 'text-white' : 'text-teal-600'
														}`}></span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}
